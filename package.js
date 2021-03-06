Package.describe({
  summary: "Juice wrapper package",
  version: '0.1.2',
  name: "sacha:juice",
  git: "https://github.com/SachaG/meteor-juice.git"
});

Npm.depends({
  juice: "1.0.0", 
});

Package.onUse(function (api) {

  api.addFiles([
    'lib/juice.js',
  ], ['server']);
  
  api.export([
    'juice'
  ]);
});
