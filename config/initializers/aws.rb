CarrierWave.configure do |config|                       # required
  config.fog_credentials = {
    provider:              'AWS',                        # required
    aws_access_key_id:     'AKIAIACWLKOE2XKGCLSQ',                        # required
    aws_secret_access_key: '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',                        # required
    region:                'ap-southeast-2',                  # optional, defaults to 'us-east-1'
    endpoint:              'https://s3-ap-southeast-2.amazonaws.com' # optional, defaults to nil
  }
  config.fog_directory  = 'brisbane11'                          # required
end