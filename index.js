const glob = require('glob');

module.exports = {
    getElectronPath: function () {
	return new Promise(function(resolve) {
	     glob('/nix/store/*-electron-[678].?.??(?)/', function (er, files) {
			if (er || files.length == 0) {
			console.warn('No electron found in the nix store; falling back to npm');
			resolve(require('electron'));
		} else if (files.length > 1) {
			console.warn('More than one electron found in the nix store; falling back to npm', files);
			resolve(require('electron'));
		} else {
			console.warn('Unique electron found in the nix store; using it');
			resolve(files[0] + '/bin/electron');
		}
    	    });
	});
    }
};

