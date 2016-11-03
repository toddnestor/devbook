Paperclip::Attachment.default_options[:storage] = :s3

Paperclip::Attachment.default_options[:s3_credentials] = {
  :bucket => "devbook",
  :access_key_id => ENV['AWS_KEY'],
  :secret_access_key => ENV['AWS_SECRET_KEY'],
  s3_region: 'us-west-1'
}

Paperclip::Attachment.default_options[:s3_options] = {
  endpoint: 'https://objects-us-west-1.dream.io'
}

Paperclip::Attachment.default_options[:url] = ':s3_domain_url'
Paperclip::Attachment.default_options[:path] = '/:class/:attachment/:id_partition/:style/:filename'
Paperclip::Attachment.default_options[:s3_host_name] = 'objects-us-west-1.dream.io'
Paperclip::Attachment.default_options[:s3_protocol] = 'https'
