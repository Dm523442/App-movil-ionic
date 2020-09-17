import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {

  constructor() { 
    this.iniciar();
  }
 list: string[];
  ngOnInit() {
  }
 iniciar(){
   this.list=[
     'tokio',
     'bogota',
     'madrid',
     'buenos aires',
     'pekin'
   ];
 }
 search(ev: any){
   this.iniciar();

   const val = ev.target.value;

   if(val && val.trim() != ''){
     this.list=this.list.filter((item) => {
       return(item.toLowerCase().indexOf(val.toLowerCase()) > -1);
    
     })
   }
 }
}
