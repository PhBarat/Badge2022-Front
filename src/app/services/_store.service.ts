import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { IMedecins } from '../Models/IMedecins';
import { FormControl, FormGroup } from '@angular/forms';
import { IMedicaments } from '../Models/IMedicaments';
import { IOrdonnances } from '../Models/IOrdonnances';
import { IPharmaciens } from '../Models/IPharmaciens';
import { IPiluliers } from '../Models/IPiluliers';

@Injectable({
  providedIn: 'root'
})
export default class _storeService {
  private static instance?: _storeService;

  // Variable Globale
  isUserLogin$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  statutSidenav$: BehaviorSubject<boolean | null> = new BehaviorSubject<boolean | null>(null);
  inputIsCreation: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  inputIsReadOnly: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(true);
  currentUrl$: BehaviorSubject<string> = new BehaviorSubject<string>(".");

  // Variable d'entete du Menu
  // contient role => qui vient du token
  rolesOfPersonneLogged$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  // contient unique_name  qui contient email de la personne du token
  emailOfPersonneLogged$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  // Variable des options du Menu : Attention => Sert aussi pour le routing....
  menuOption1$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption2$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption3$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption4$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption5$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption6$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption7$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption8$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);
  menuOption9$: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);


  // ECRAN : M??decins S??lection
  dataSourceB$: BehaviorSubject<MatTableDataSource<IMedecins> | null> = new BehaviorSubject<MatTableDataSource<IMedecins> | null>(null);
  dataSourceO$: Observable<MatTableDataSource<IMedecins>> = new Observable<MatTableDataSource<IMedecins>>();

  displayedColumns$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);
  displayedFields$: Observable<string[]> = new Observable<string[]>();

  // ECRAN : M??decins cr??ation
  medecinCreationFG$:any = new FormGroup({
    MedecinName: new FormControl('unom'),
    MedecinInami: new FormControl('uprenom'),
    MedecinRue: new FormControl('urue'),
    MedecinVille: new FormControl('ucodep'),
    MedecinTelephone: new FormControl('uville'),
    MedecinGsm: new FormControl('Email'),
  });

  // ECRAN : M??dicaments S??lection
  medicamentsB$: BehaviorSubject<MatTableDataSource<IMedicaments> | null> = new BehaviorSubject<MatTableDataSource<IMedicaments> | null>(null);
  medicamentsO$: Observable<MatTableDataSource<IMedicaments>> = new Observable<MatTableDataSource<IMedicaments>>();

  // ECRAN : Ordonnances S??lection
  ordonnancesB$: BehaviorSubject<MatTableDataSource<IOrdonnances> | null> = new BehaviorSubject<MatTableDataSource<IOrdonnances> | null>(null);
  ordonnancesO$: Observable<MatTableDataSource<IOrdonnances>> = new Observable<MatTableDataSource<IOrdonnances>>();

  // ECRAN : Pharmacienss S??lection
  pharmaciensB$: BehaviorSubject<MatTableDataSource<IPharmaciens> | null> = new BehaviorSubject<MatTableDataSource<IPharmaciens> | null>(null);
  pharmaciensO$: Observable<MatTableDataSource<IPharmaciens>> = new Observable<MatTableDataSource<IPharmaciens>>();

  // ECRAN : Piluliers S??lection
  piluliersB$: BehaviorSubject<MatTableDataSource<IPiluliers> | null> = new BehaviorSubject<MatTableDataSource<IPiluliers> | null>(null);
  piluliersO$: Observable<MatTableDataSource<IPiluliers>> = new Observable<MatTableDataSource<IPiluliers>>();


  // ECRAN : M??dicaments cr??ation
  medicamentsCreationFG$:any = new FormGroup({
    MedicamentsName: new FormControl('name'),
  });

  // ECRAN : Ordonnances cr??ation
  ordonnancesCreationFG$:any = new FormGroup({
    MedicamentsName: new FormControl('fnom'),
  });

  // ECRAN : Pharmaciens cr??ation
  pharmaciensCreationFG$:any = new FormGroup({
    MedicamentsName: new FormControl('cnom'),
  });

  // ECRAN : Piluliers cr??ation
  piluliersCreationFG$:any = new FormGroup({
    MedicamentsName: new FormControl('nnote'),
  });

  private constructor() {
    //super();
  }
  public static getInstance() {
    if (!this.instance) {
      this.instance = new _storeService();
    }
    return this.instance;
  }
}
