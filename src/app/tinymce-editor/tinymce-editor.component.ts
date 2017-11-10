//import { Component, OnInit } from '@angular/core';
import { Component, OnInit,  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output } from '@angular/core';
  import 'tinymce';
import 'tinymce/themes/modern';
import 'tinymce/themes/inlite';

import 'tinymce/plugins/table';
import 'tinymce/plugins/link';
import 'tinymce/plugins/advlist';
import 'tinymce/plugins/autosave';
import 'tinymce/plugins/code';
import 'tinymce/plugins/emoticons';
import 'tinymce/plugins/media';


  declare var tinymce: any;
@Component({
  selector: 'app-tinymce-editor',
  template: `<div id="{{elementId}}"></div>`,
  styleUrls: ['./tinymce-editor.component.css']
})
export class TinymceEditorComponent implements  AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Output() onEditorContentChange = new EventEmitter();

  editor;

  ngAfterViewInit() {
    tinymce.init({
      selector: '#' + this.elementId,
      branding: false,
      height:400,
      inline:true,
      selection_toolbar: 'undo redo | bold italic | alignleft aligncenter alignright alignjustify | quicklink h1 h2 h3 h4 h5 h6 blockquote | emoticons ',
      insert_toolbar: 'quickimage media code restoredraft ',
      plugins: ['link', 'table' , 'advlist' , 'autosave' , 'code' , 'emoticons' , 'media'],
      skin_url: '../../assets/skins/lightgray',
      theme:'inlite',
      autosave_interval: "10s",
      setup: editor => {
        this.editor = editor;
        editor.on('keyup change', () => {
          const content = editor.getContent();
          console.log(content);
          this.onEditorContentChange.emit(content);
        });
      }
    });
  }

  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}

