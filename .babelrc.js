const conf = {
    presets: [
        [
            "@babel/preset-env",
            {
              "targets": {
                "browsers": [
                  "last 5 versions",
                  "not ie < 11",
                  "ios >= 7",
                  "android >= 4.0"
                ]
              },
              "modules": false,
              "debug": false,
              "loose": true,
              "useBuiltIns": "usage"
            }
        ],
        ["@babel/preset-react"]
    ],
    plugins: [
        "@babel/plugin-syntax-dynamic-import",
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
        ["@babel/plugin-proposal-class-properties", { "loose": true }]
    ]
}

module.exports = conf
