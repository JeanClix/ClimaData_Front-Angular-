import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NoticiaService } from '../../services/noticia-local/noticia.service';
import { Noticia } from '../../models/noticia.model';
import { NgbAlert, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';
import { debounceTime, Subject, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-noticia-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, FormsModule, NgbAlertModule],
  templateUrl: './news.component.html',
  styleUrl: './news.component.css'
})

export class NewsComponent implements OnInit {
  formRegistro!: FormGroup;
  noticiaService = inject(NoticiaService);
  noticia?: Noticia;
  noticias: Noticia[] = [];
  btnDescripcion: string='Crear'
  private _message$ = new Subject<string>();
  staticAlertClosed = true;
	successMessage = '';
  colorMessage= '';

	@ViewChild('staticAlert', { static: false }) staticAlert!: NgbAlert ;
	@ViewChild('selfClosingAlert', { static: false }) selfClosingAlert!: NgbAlert;

  constructor(private _noticiaService: NoticiaService){
    //setTimeout(() => this.staticAlert.close(), 5000);

		this._message$
			.pipe(
				takeUntilDestroyed(),
				tap((message) => (this.successMessage = message)),
				//debounceTime(5000),
			)
			.subscribe(() => this.selfClosingAlert?.close());
  }
  
  ngOnInit(): void {
    this.nuevo()
    this.listar()

  }
  private nuevo(){
    this.formRegistro = new FormGroup({
      id: new FormControl(null,[]),
      titulo: new FormControl('',[Validators.required]),
      descripcion: new FormControl('',[Validators.required]),           
      foto: new FormControl('',[Validators.required]),
    });
  }
  
  protected create() {
    debugger
    const noticia = this.formRegistro!.value;
    if(noticia.id !== null ){
      this.noticiaService.updateNoticia(noticia.id, noticia).subscribe(()=>{
        this.listar(), 
        console.log("modificar")
        this.btnDescripcion='Crear'
        this.nuevo()
        this._message$.next(`Se  modifico el registro correctamente`);
        this.colorMessage = "info"
    });
    }else{
      this.noticiaService.createNoticia(noticia).subscribe(()=>{
      this.listar(), 
      console.log("registro")
      this.nuevo()
      this.colorMessage = "success"
      this._message$.next(`Se registro el registro correctamente`);
  });
    }
    
  }
  
  protected listar(){
    this._noticiaService.getNoticas().subscribe( data => {
      this.noticias = data;
    });
  }

  protected seleccionar(id: any){
    debugger
    this._noticiaService.getNoticiaById(id).subscribe( data => {
      this.noticia = data;
      this.formRegistro.get('id')?.setValue(data.id);
      this.formRegistro.get('titulo')?.setValue(data.titulo);
      this.formRegistro.get('descripcion')?.setValue(data.descripcion);
      this.formRegistro.get('foto')?.setValue(data.foto)
      this.btnDescripcion ='Actualizar'
    });
  }
  protected eliminar(id: any){

      this._noticiaService.deleteNoticia(id).subscribe(()=>{
        this.listar()
        this.colorMessage = "danger"
        this.changeSuccessMessage()
    });
    
  }
	public changeSuccessMessage() {
		this._message$.next(`Se elimino el registro correctamente`);
	}
  }

