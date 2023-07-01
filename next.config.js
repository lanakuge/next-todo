/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ACCESS_TOKEN_SECRET:
      "dydRcXeJfRwOWOam5CXwF4KZINa66DIA99emZbtbGsaL1ectjO6fIEeDT6hIEb2APdzJTSx6RVC3GsBUk86wcVmSxNrXoiyrQW9o",
    REFRESH_TOKEN_SECRET:
      "YPOHX1fJB15SIlvI4oDLKbveel8bBr2nxUjf669yk6ZHCnlTzqiQAD6Jn9qBRXRLIC3lMayl8VgmeIoTT8IiZgeuOmkLkruXMSxI",
    HOST: "http://localhost:3000/",
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
