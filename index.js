const glob = require('glob');

glob('/nix/store/*-electron-[678].?.??(?)/', function (er, files) {
	if (er || files.length == 0) {
		console.warn('No electron found in the nix store; falling back to npm');
		return require('electron');
	} else if (files.length > 0) {
		console.warn('More than one electron found in the nix store; falling back to npm');
		return require('electron');
	} else {
		console.warn('Unique electron found in the nix store; using it');
		return files[0] + '/bin/electron';
	}
});
