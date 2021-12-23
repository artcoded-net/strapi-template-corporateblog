module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '160446b2d03b44cbb58f958ee6a549a1'),
  },
});
