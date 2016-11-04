class Friendship < ApplicationRecord
  def self.request(requestor, requestee)
    return nil if Friendship.friendship_exists?(requestor, requestee)

    transaction do
      friendship1 = create(user: requestor, friend: requestee, status: 'pending')
      friendship2 = create(user: requestee, friend: requestor, status: 'pending')

      friendship1
    end
  end

  def self.friendship_exists?(user1, user2)
    Friendship.exists?(user_id: user1.id, friend_id: user2.id) || Friendship.exists?(user_id: user2.id, friend_id: user1.id)
  end

  validate :not_blocked

  belongs_to :user

  belongs_to :friend,
    foreign_key: :friend_id,
    class_name: :User

  after_destroy :delete_mutual_friendship!

  state_machine :status, initial: :pending do
    after_transition on: :accept, do: [:accept_mutual_friendship!]
    after_transition on: :block, do: [:block_mutual_friendship!]

    state :requested

    state :blocked

    state :been_blocked

    event :accept do
      transition any => :accepted
    end

    event :block do
      transition any => :blocked
    end
  end

  def not_blocked
    if blocked_friendship_exists?
        errors.add(:base, "The friendship cannot be added.")
    end
  end

  def mutual_friendship
    self.class.where({user_id: friend_id, friend_id: user_id}).first
  end

  def blocked_friendship_exists?
    Friendship.exists?(user_id: user_id, friend_id: friend_id, state: 'blocked') || UserFriendship.exists?(user_id: friend_id, friend_id: user_id, state: 'blocked') || UserFriendship.exists?(user_id: user_id, friend_id: friend_id, state: 'been_blocked') || Friendship.exists?(user_id: friend_id, friend_id: user_id, state: 'been_blocked')
  end

  private
  def accept_mutual_friendship!
      mutual_friendship.update_attribute(:status, 'accepted')
  end

  def block_mutual_friendship!
    mutual_friendship.update_attribute(:status, 'been_blocked') if mutual_friendship
  end

  def delete_mutual_friendship!
    mutual_friendship.delete
  end
end
