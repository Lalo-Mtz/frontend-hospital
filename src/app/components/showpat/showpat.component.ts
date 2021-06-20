import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showpat',
  templateUrl: './showpat.component.html',
  styleUrls: ['./showpat.component.css']
})
export class ShowpatComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  toreceta(){
    document.getElementById("recetas")?.scrollIntoView({behavior:"smooth"});
  }
  toeditpat(){
    document.getElementById("Editarinfo")?.scrollIntoView({behavior:"smooth"});
  }
  topatient(){
    document.getElementById("infopaciente")?.scrollIntoView({behavior:"smooth"});
  }

  toreslab(){
    document.getElementById("reslab")?.scrollIntoView({behavior:"smooth"});
  }

}
