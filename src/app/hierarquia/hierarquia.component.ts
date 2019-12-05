import { Component, OnInit, ElementRef } from '@angular/core';


@Component({
  selector: 'app-hierarquia',
  templateUrl: './hierarquia.component.html',
  styleUrls: ['./hierarquia.component.css']
})

export class HierarquiaComponent implements OnInit {

  public folder: any;
  public contaid: any;
  public contaidfilho: any;
  public position: any;
  public habilitado: any;
  public hcheck: any;
  public valorCheckado: any;
  public allfolder = [];

  constructor() { }

  ngOnInit() {
    this.contaid = 0;
    this.contaidfilho = 0;
    this.habilitado = true;
    this.position = 0;
    this.hcheck = false;
  }

  async addElement() {
    let position = this.allfolder.length - 1;

    if (position >= 0) {
      this.allfolder.forEach(element => {
        if (element.id >= 0) {
          this.contaid = element.id;
        }
      });
    };

    this.allfolder.push(
      {
        id: this.contaid + 1,
        name: 'Pasta',
        description: 'Pasta Pai',
        icon: 'fas fa-folder',
        habilitado: true,
        filho: [],
      }
    );

    this.confereElementos();
  }

  async removeElement() {
    let position = this.allfolder.length - 1;
    this.allfolder.splice(position, 1);
    this.confereElementos();
  }

  async confereElementos() {
    if (this.allfolder.length === 0) {
      this.contaid = 0;
    }
    console.log(this.allfolder)
  }

  async addElementF() {
    this.habilitado = false;
    this.allfolder.forEach(element => {
      if (element.id === this.valorCheckado) {
        this.allfolder[this.valorCheckado - 1].filho.push(
          {
            id: this.contaidfilho + 1,
            name: 'Sub Pasta',
            description: 'Pasta Pai',
            icon: 'fas fa-folder',
            habilitado: true,
            filho: [],
          }
        )
      }
    });
  }

  async remElementF() {
    this.habilitado = true;;
  }

  async Check(e) {
    this.valorCheckado = e + 1;
    let check = document.getElementById(this.valorCheckado) as HTMLElement;
    console.log(check);
  }
}
