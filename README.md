# ember-cli-materialnote

An Ember component for [MaterialNote](https://github.com/Cerealkillerway/materialNote).

Note that this is still a work in progress. Feedback is encouraged.

## Installation

`ember install ember-cli-materialnote`

## How to Use

```
{{ember-materialnote body=body}} // uses default options

let airPopover = [['color', ['color']], ['font', ['bold', 'underline', 'clear']]];
{{ember-materialnote body=body airMode=true airPopover=airPopover}} // uses air mode

let toolbar = [['fonts', ['fontsize', 'fontname']], ['color', ['color']]];
{{ember-materialnote body=body toolbar=toolbar}}
```

These are the available options:

| Option | Default |
| --- | --- |
| toolbar | // MaterialNote's default |
| height | 500 |
| airMode | false |
| airPopover | // only displays when airMode is true |
| followingToolbar | false |
| defaultBackColor | // MaterialNote's default |
| defaultTextColor | // MaterialNote's default |

See the [MaterialNote demo](http://www.web-forge.info/projects/materialNote) for more information.

## Known Issues

MaterialNote uses an older version of summernote, so some parts of the summernote API are unavailable. See [this issue](https://github.com/Cerealkillerway/materialNote/issues/8) in MaterialNote's repo for more information.

## Tasks

- [x] Create initial release
- [ ] Add actions (`on-update`, etc.)
