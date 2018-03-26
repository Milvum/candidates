# [StemApp](https://milvum.github.io/stemapp/)

At the end of 2016 we started our journey with the goal: making digital voting possible for The Netherlands. In co-creation with five municipalities, we worked together to enable citizen participation on the blockchain. We believe this is a perfect step for making digital voting on the blockchain a reality. We have worked hard to realize the project and are pleased that a first version is now available for further development. That is why we are now doing an Open Source release of our StemApp project. We invite developers and security researchers to help The Netherlands in the next phase of digital voting. We be

Please mention [Milvum](https://milvum.com) in communications when using this code.

# Candidates
The Candidates project contains the wallet adresses and other data of the candidates that can be voted for. This data is exposed through helpful typescript classes and interfaces.

The available candidates are currently obtained from `data/election.json`. This JSON file needs to adhere the schema structure as defined in `schema/candidates.json`. It basically forms a tree of the candidates where the leaves are the actual candidates and branches are (sub)groups of those candidates. 

## StemApp-stack dependencies
This project depends on the following StemApp projects:
* web3j-instance (npm module)

## Including this project as an NPM module
This project is meant to be included in other parts of the StemApp-stack as an npm module. By default it is configured to be published to a private npm registry at `http://npm.milvum/`. To include it as an npm module, you can either:
1. Set up your own [private npm registry](https://docs.npmjs.com/private-modules/intro),
1. or include it as a [local module](https://docs.npmjs.com/files/package.json#local-paths).

## Disclaimer

The project in the current state is not market ready and thus should only be used for pilots or testing. In its current state the StemApp is not yet fully tested and not entirely secure (see open issues in the [whitepaper](https://milvum.com/en/download-stemapp-whitepaper/)). This version is also not yet ready for a release on the public Ethereum network. Milvum is not accountable for the use of the StemApp in any way, and the possible outcomes this may have.
