json.extract! media_item, :id, :title, :caption, :user_id

json.set! :urls do
  json.set! :large, media_item.media.url(:large).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
  json.set! :wide, media_item.media.url(:wide).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
  json.set! :small, media_item.media.url(:small).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
  json.set! :square, media_item.media.url(:square).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
  json.set! :narrow, media_item.media.url(:narrow).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
  json.set! :avatar, media_item.media.url(:avatar).sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
  json.set! :original, media_item.media.url.sub('devbook.objects-us-west-1.dream.io', 'devbook.objects.cdn.dream.io')
end
