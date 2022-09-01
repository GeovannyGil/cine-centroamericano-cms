module.exports = ({ env }) => ({
  // publisher: {
  //   enabled: true
  // },
  scheduler: {
    enabled: true,
    config: {
      model: "scheduler",
    },
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET')
      },
      actionOptions: {
        upload: {},
        // uploadStream: {},
        delete: {},
      }
    }
  }
})