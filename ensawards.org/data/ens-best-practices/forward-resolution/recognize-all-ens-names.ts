// TODO: In a future PR uncomment recognizeAllENSNames best practice

// import contributors from "data/contributors";

// // Using an approach of practical steps of how to implement with authoritative links with more details
// const technicalDetailsMainContent = `To properly support all valid ENS names, your application should implement a structured validation approach.
// Begin by handling empty input cases by prompting users to enter an ENS name or address.
// Then verify if the input represents an address format using a library such as [Viem](https://viem.sh/docs/utilities/isAddress), treating it as an address if valid.
// For non-address inputs, determine if the input can be normalized as an ENS name using \`ens_normalize\` from [ENSIP-15](https://docs.ens.domains/ensip/15).
// When \`ens_normalize\` executes without throwing an error, the input is considered normalizable (meaning normalization succeeds), which differs from being normalized (where input equals output).
// Then you should process the normalized result as the canonical ENS name representation.
// Libraries including [Viem](https://viem.sh/docs/ens/utilities/normalize),
// [ensjs](https://github.com/ensdomains/ensjs/blob/8b4c34840cdef8828961453554e12aea8c9bfe83/packages/ensjs/src/utils/normalise.ts#L34)
// and [ens-normalize.js](https://github.com/adraffy/ens-normalize.js) provide \`ens_normalize\` implementations,
// with additional options available in the [ENS Documentation](https://docs.ens.domains/web/libraries).
// Finally, display an appropriate error message when input fails validation as either a valid name or address. `;
//
// // I'm using https://ensnode.io/docs/ as the main reference point for our docs since it will remain a static path no matter what we update in our docs.
// // Ideally our quickstart will become more robust and be perfect for a callout like this.
// const technicalDetailsAdditionalContent = `Once you have properly implemented ENS name detection, consider adding more details and records to your app.
// [ENSNode](https://ensnode.io/docs/) makes it simple and easy to fetch ENS profile data that can be used to enhance your user experience.
// This could include avatars, social media profiles, links to website, and much more listed in the official [ENS documentation](https://docs.ens.domains/web).`;
//
// export const recognizeAllENSNames: BestPracticeApp = {
//   id: "recognize-all-ens-names",
//   bestPracticeSlug: "recognize-all-ens-names",
//   name: "Recognize all valid ENS names",
//   description: "Support user input of all valid ENS names (not only .eth names).",
//   category: ForwardResolutionCategory,
//   appliesTo: [AppTypes.Wallet, AppTypes.Explorer],
//   technicalDetails: {
//     main: {
//       header: "ENS best practice details",
//       content: technicalDetailsMainContent,
//     },
//     sides: [
//       {
//         header: "Additional Details",
//         content: technicalDetailsAdditionalContent,
//       },
//     ],
//   },
// contributions: [
//   { from: contributors.stevedylan, updatedAt: parseTimestamp("2025-12-09T11:03:00.000Z") },
// ],
// };
