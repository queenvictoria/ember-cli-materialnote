# ember-cli-materialnote

An Ember component for [materialNote](https://github.com/Cerealkillerway/materialNote).

Note that this is in alpha right now. Feedback is appreciated.

## Installation

`ember install ember-cli-materialnote`

## How to Use

```
{{ember-materialnote body=body}} // uses default options

let airPopover = [['color', ['color']], ['font', ['bold', 'underline', 'clear']]];
{{ember-materialnote body=body airMode=true airPopover=airPopover}} // uses air mode

let toolBar = [['fonts', ['fontsize', 'fontname']], ['color', ['color']]];
{{ember-materialnote body=body toolBar=toolBar}}
```

These are the available options:

| Option | Default |
| --- | --- |
| toolbar | // materialNote's default |
| height | 500 |
| airMode | false |
| airPopover | // only displays when airMode is true |
| followingToolbar | false |
| defaultBackColor | // materialNote's default |
| defaultTextColor | // materialNote's default |

See the [materialNote demo](http://www.web-forge.info/projects/materialNote) for more information.

## Known Issues

MaterialNote uses an older version of summernote, so some parts of the summernote API are unavailable. See [this issue](https://github.com/Cerealkillerway/materialNote/issues/8) in materialNote's repo for more information.

This uses ember-cli-materialize version 0.19.5. As of now, they're working on v1, but that's in alpha at the moment.

Temporarily, you also need to add this to your ember-cli-build.js:

    var app = new EmberApp(defaults, {
      sassOptions: {
        includePaths: [
          'bower_components/materialize/sass'
        ]
      }
    });
