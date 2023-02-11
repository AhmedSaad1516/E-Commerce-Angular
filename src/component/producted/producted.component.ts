import { Component, Input, OnInit, Output ,EventEmitter} from '@angular/core';




@Component({
  selector: 'app-producted',
  templateUrl: './producted.component.html',
  styleUrls: ['./producted.component.css']
})
export class ProductedComponent implements OnInit {
@Input() data:any=[]
@Output() item=new EventEmitter()
addBtn:boolean=false
ammount:number=0
  constructor() { }

  ngOnInit(): void {
  }
  addToCart(){
this.item.emit( {item:this.data,quantity:this.ammount})
  }

}
