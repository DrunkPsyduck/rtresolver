import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../Service/api.service';

@Component({
  selector: 'app-modificar-url',
  templateUrl: './modificar-url.component.html',
  styleUrls: ['./modificar-url.component.css']
})
export class ModificarUrlComponent implements OnInit {

  public urls = Array<string>();
  public urlsNuevas = Array<string>();
  public url: string = "";
  

  @ViewChild('cajaurl') cajaurl: ElementRef;

  constructor( private _service: ApiService,) {
    this.cajaurl = ElementRef.prototype
  }
  ngOnInit(): void {
    this.urls = []
    this.urlsNuevas = []
  }
  public Add() {
    this.urls.push(this.cajaurl.nativeElement.value);

  }

  public Submit(){
    for(let url of this.urls){
      url = url.replace('www','es')
      this.urlsNuevas.push(url);
    }

  }
  public GetVideoFromAPI(url: string){
    let n = url.lastIndexOf('/');
    let videoId = url.substring(n + 1);
 
     this._service.getVideo(videoId).subscribe(res=>{
       console.log(res)
     },err =>{
       console.log(err)
     })

  }

}
