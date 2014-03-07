Package.describe({
  summary: "A Behave behavior mock for quick forking."
});

Package.on_use(function (api) {
  api.use(['behave'])
  api.add_files([
    'lib/behavior.js'
    ], ['client', 'server']);

});
