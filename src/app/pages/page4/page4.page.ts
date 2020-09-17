import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page4',
  templateUrl: './page4.page.html',
  styleUrls: ['./page4.page.scss'],
})
export class Page4Page implements OnInit {

   constructor() { 
    this.iniciar();
  }
 list: string[];
  ngOnInit() {
  }
 iniciar(){
   this.list=[
     'japon',
     'colombia',
     'españa',
     'argentina',
     'china'
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
