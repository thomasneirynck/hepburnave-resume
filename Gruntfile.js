module.exports = function (grunt) {
    require("load-grunt-tasks")(grunt);
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        compress: {
            main: {
                options: {
                    archive: "release/hepburnave.zip"
                },
                files: [
                    {cwd: ".", src: "index.html", dest: "hepburnave", filter: "isFile"},
                    {cwd: ".", src: "main.css", dest: "hepburnave", filter: "isFile"},
                    {cwd: ".", src: "images/**", dest: "hepburnave", filter: "isFile"}
                ]
            }
        }
    });

    grunt.registerTask('default', ['compress']);
};
