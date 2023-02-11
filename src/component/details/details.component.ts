import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProducetService } from 'src/app/services/producet.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
id;
data:any={}
loading:boolean=false
  constructor(private router :ActivatedRoute, private serv :ProducetService) { 
   
    this.id=this.router.snapshot.paramMap.get('id')
    
  }

  ngOnInit(): void {
 this.getAllProduct()
  }

  getAllProduct(){
    this.loading=true
    this.serv.getProductsById(this.id).subscribe((res:any)=>{
      this.loading=false
this.data=res
    },error=>{
      this.loading=false
    })
  }
}
