module.exports = {
  // Uncommenting the defaults below
  // provides for an easier quick-start with Ganache.
  // You can also follow this format for other networks.
  // See details at: https://trufflesuite.com/docs/truffle/reference/configuration
  // on how to specify configuration options!
  //
  networks: {
  //   development: {
  //     host: "10.32.2.150",
  //     port: 8545,
  //     gas: "6721975",
  //     network_id: "*",
  //   },
  //   test: {
  //     host: "10.32.2.150",
  //     port: 8545,
  //     gas: "6721975",
  //     network_id: "*",
  //   }
    // development: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   gas: "6721975",
    //   network_id: "*",
    // },
    // test: {
    //   host: "127.0.0.1",
    //   port: 8545,
    //   gas: "6721975",
    //   network_id: "*",
    // },
    development: {
      host: "45.32.55.194",
      port: 8545,
      gas: "6721975",
      network_id: "*",
    },
    test: {
      host: "45.32.55.194",
      port: 8545,
      gas: "6721975",
      network_id: "*",
    }
  },
  // Configure your compilers
  compilers: {
    solc: {
      version: "0.8.13",      // Fetch exact version from solc-bin (default: truffle's version)
      //docker: true,        // Use "0.5.1" you've installed locally with docker (default: false)
      settings: {          // See the solidity docs for advice about optimization and evmVersion
       optimizer: {
         enabled: false,
         runs: 200
       }
      //  evmVersion: "byzantium"
      }
    }
  },
  //
  // Truffle DB is currently disabled by default; to enable it, change enabled:
  // false to enabled: true. The default storage location can also be
  // overridden by specifying the adapter settings, as shown in the commented code below.
  //
  // NOTE: It is not possible to migrate your contracts to truffle DB and you should
  // make a backup of your artifacts to a safe location before enabling this feature.
  //
  // After you backed up your artifacts you can utilize db by running migrate as follows:
  // $ truffle migrate --reset --compile-all
  //
  // db: {
  // enabled: false,
  // host: "127.0.0.1",
  // adapter: {
  //   name: "sqlite",
  //   settings: {
  //     directory: ".db"
  //   }
  // }
  // }
};
