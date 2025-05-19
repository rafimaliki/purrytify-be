// api/.well-known/assetlinks.js

export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.status(200).json([
    {
      relation: ["delegate_permission/common.handle_all_urls"],
      target: {
        namespace: "android_app",
        package_name: "com.your.package.name",
        sha256_cert_fingerprints: [
          "AA:BB:CC:DD:...", // Replace with your actual SHA256 fingerprint
        ],
      },
    },
  ]);
}
