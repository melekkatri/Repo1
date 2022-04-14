import { Component, OnInit } from '@angular/core';
import { RecServiceService } from '../rec-service.service';
import { reclam } from '../reclam';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-reduced',
  templateUrl: './reduced.component.html',
  styleUrls: ['./reduced.component.css']
})
export class ReducedComponent implements OnInit {
  Reclamations;
  constructor(service:RecServiceService, private route: ActivatedRoute,private router: Router) { 
    this.Reclamations=service.getRec();

  }

  ngOnInit(): void {
  }

  viewrec(id: number){
    //console.log("id rec" , id)
    //this.router.navigate(['/reclamation-details', id]);
  }

}
