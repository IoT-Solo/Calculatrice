import { Component } from '@angular/core';
import { NativeAudio } from '@ionic-native/native-audio/ngx';
import { Platform } from '@ionic/angular';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display = '0';
  resultat: any = null;
  firstval: number = null;
  signe: any = null;
  operator: any = null;
  newcursor = false;
  isc = false;
  iscomma = false;
  displa = null;
  constructor(private nativeAudio: NativeAudio, public platform: Platform,) {
    this.platform.ready().then(() => {
      this.nativeAudio.unload('sept');
      this.nativeAudio.preloadComplex('sept', 'assets/audio/chauve_souris-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('neuf');
      this.nativeAudio.preloadComplex('neuf', 'assets/audio/hippopotame-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('zero');
      this.nativeAudio.preloadComplex('zero', 'assets/audio/serpent-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('un');
      this.nativeAudio.preloadComplex('un', 'assets/audio/lion-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('deux');
      this.nativeAudio.preloadComplex('deux', 'assets/audio/chat-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('trois');
      this.nativeAudio.preloadComplex('trois', 'assets/audio/chimpanze-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('quatre');
      this.nativeAudio.preloadComplex('quatre', 'assets/audio/koala-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('six');
      this.nativeAudio.preloadComplex('six', 'assets/audio/ecureuil-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('cinq');
      this.nativeAudio.preloadComplex('cinq', 'assets/audio/lapin-2.mp3', 1, 1, 0);
      this.nativeAudio.unload('huit');
      this.nativeAudio.preloadComplex('huit', 'assets/audio/renard-2.mp3', 1, 1, 0);

  });
  }

  playAudio(nombre) {

    if(nombre===7){

  this.nativeAudio.play('sept', () => console.log('trackID is done playing'));
  this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('deux');
  this.nativeAudio.stop('zero');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('quatre');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('six');
  this.nativeAudio.stop('huit');
}
else if(nombre===9){

this.nativeAudio.play('neuf', () => console.log('trackID is done playing'));
this.nativeAudio.stop('sept');
this.nativeAudio.stop('un');
this.nativeAudio.stop('deux');
this.nativeAudio.stop('zero');
this.nativeAudio.stop('trois');
this.nativeAudio.stop('quatre');
this.nativeAudio.stop('cinq');
this.nativeAudio.stop('six');
this.nativeAudio.stop('huit');
}
else if(nombre===0){

  this.nativeAudio.play('zero', () => console.log('trackID is done playing'));
  this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('deux');
  this.nativeAudio.stop('sept');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('quatre');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('six');
  this.nativeAudio.stop('huit');
}
else if(nombre===1){

this.nativeAudio.play('un', () => console.log('trackID is done playing'));
this.nativeAudio.stop('sept');
this.nativeAudio.stop('neuf');
this.nativeAudio.stop('deux');
this.nativeAudio.stop('zero');
this.nativeAudio.stop('trois');
this.nativeAudio.stop('quatre');
this.nativeAudio.stop('cinq');
this.nativeAudio.stop('six');
this.nativeAudio.stop('huit');
}
else if(nombre===2){

  this.nativeAudio.play('deux', () => console.log('trackID is done playing'));
  this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('sept');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('zero');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('quatre');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('six');
  this.nativeAudio.stop('huit');
}
else if(nombre===3){

this.nativeAudio.play('trois', () => console.log('trackID is done playing'));
this.nativeAudio.stop('sept');
this.nativeAudio.stop('neuf');
this.nativeAudio.stop('un');
this.nativeAudio.stop('deux');
this.nativeAudio.stop('zero');
this.nativeAudio.stop('quatre');
this.nativeAudio.stop('cinq');
this.nativeAudio.stop('six');
this.nativeAudio.stop('huit');
}
if(nombre===4){

  this.nativeAudio.play('quatre', () => console.log('trackID is done playing'));
  this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('sept');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('deux');
  this.nativeAudio.stop('zero');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('six');
  this.nativeAudio.stop('huit');
}
else if(nombre===5){

this.nativeAudio.play('cinq', () => console.log('trackID is done playing'));
this.nativeAudio.stop('sept');
this.nativeAudio.stop('neuf');
this.nativeAudio.stop('un');
this.nativeAudio.stop('deux');
this.nativeAudio.stop('zero');
this.nativeAudio.stop('trois');
this.nativeAudio.stop('quatre');
this.nativeAudio.stop('six');
this.nativeAudio.stop('huit');
}
 else if(nombre===6){

  this.nativeAudio.play('six', () => console.log('trackID is done playing'));
  this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('deux');
  this.nativeAudio.stop('zero');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('quatre');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('sept');
  this.nativeAudio.stop('huit');
}
else if(nombre===8){

this.nativeAudio.play('huit', () => console.log('trackID is done playing'));
this.nativeAudio.stop('sept');
this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('deux');
  this.nativeAudio.stop('zero');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('quatre');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('six');
}
else if(nombre===10){
  this.nativeAudio.stop('sept');
  this.nativeAudio.stop('neuf');
  this.nativeAudio.stop('un');
  this.nativeAudio.stop('deux');
  this.nativeAudio.stop('zero');
  this.nativeAudio.stop('trois');
  this.nativeAudio.stop('quatre');
  this.nativeAudio.stop('cinq');
  this.nativeAudio.stop('six');
  this.nativeAudio.stop('huit');
}
  }
  click(val: any) {
    switch (val) {
      case 'ac':
        this.display = '0';
        this.resultat = null;
        this.firstval = null;
        this.operator = null;
        this.newcursor = false;
        this.displa = null;
        this.iscomma=false;
        this.playAudio(10);
        break;
      case 'c':
        if(this.iscomma===true){
          this.iscomma=false;
        }
        this.displa = null;
        this.firstval = null;
        const p = this.display.length - 1;
        this.display = this.display.substring(0,p);
        this.playAudio(10);
        if(this.display===''){
          this.display = '0';
          this.iscomma=false;
        }
        break;
      case '/':
        this.addoperator('/');
        this.displa = null;
        this.playAudio(10);
        break;
      case 'X':
        this.addoperator('X');
        this.playAudio(10);
        this.displa = null;
        break;
      case '-':
        this.addoperator('-');
        this.playAudio(10);
        this.displa = null;
        break;
      case '+':
        this.addoperator('+');
        this.playAudio(10);
        this.displa = null;
        break;
      case '=':
        if (this.firstval !== null && this.operator !== null) {
          this.calclast();
        }
        this.playAudio(10);
        this.operator = null;
        break;
      case '0':
        this.addnumber('0');
        this.playAudio(0);
        this.displa = null;
        break;
      case '1':
        this.addnumber('1');
        this.playAudio(1);
        this.displa = null;
        break;
      case '2':
        this.addnumber('2');
        this.playAudio(2);
        this.displa = null;
        break;
      case '3':
        this.addnumber('3');
        this.playAudio(3);
        this.displa = null;
        break;
      case '4':
        this.addnumber('4');
        this.playAudio(4);
        this.displa = null;
        break;
      case '5':
        this.addnumber('5');
        this.playAudio(5);
        this.displa = null;
        break;
      case '6':
        this.addnumber('6');
        this.playAudio(6);
        this.displa = null;
        break;
      case '7':
        this.addnumber('7');
        this.playAudio(7);
        this.displa = null;
        break;
      case '8':
        this.addnumber('8');
        this.playAudio(8);
        this.displa = null;
        break;
      case '9':
        this.addnumber('9');
        this.playAudio(9);
        this.displa = null;
        break;
      case ',':
        this.addcomma();
        this.displa = null;
        break;
    }
  }

  addcomma() {
    if (this.iscomma === false) {
      this.iscomma = true;
    } else {
      this.iscomma = false;
    }
  }

  addnumber(nbr: string) {
    if (nbr === '0') {
      if (this.newcursor === true) {
        this.display = nbr;
        this.displa = null;
        this.newcursor = false;
      } else if (this.display !== '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        } else {
          this.display = this.display.toString() + nbr;
        }
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          this.display = `${this.display.toString()}.${nbr}`;
        }
      }
    } else {
      if (this.newcursor === true) {
        this.display = nbr;
        this.displa = null;
        this.newcursor = false;
      } else if (this.display === '0') {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = nbr;
        }
      } else {
        if (this.iscomma === true) {
          if (this.display.toString().indexOf('.') > -1) {
            this.display = this.display.toString() + nbr;
          } else {
            this.display = `${this.display.toString()}.${nbr}`;
          }
        } else {
          this.display = this.display.toString() + nbr;
        }
      }
    }
    this.isc = true;
  }

  addoperator(op: string) {
    if (this.newcursor === false) {
      if (this.firstval === null) {
        if (this.iscomma === true) {
          this.firstval = parseFloat(this.display);
          this.display = ` ${op}`;
        } else {
          // eslint-disable-next-line radix
          this.firstval = parseInt(this.display, 0);
          this.display = ` ${op}`;
        }
      }
      if (this.firstval !== null && this.operator !== null) {
        this.calclast();
      }
    }
    this.iscomma = false;
    this.operator = op;
    this.newcursor = true;
  }

  calclast() {
    switch (this.operator) {
      case '/':
        if (this.iscomma === true) {
          this.signe = (this.firstval / parseFloat(this.display));
        } else {
          // eslint-disable-next-line radix
          this.signe = (this.firstval / parseInt(this.display, 0));
        }
        break;
      case 'X':
        if (this.iscomma === true) {
          this.signe = (this.firstval * parseFloat(this.display));
        } else {
          // eslint-disable-next-line radix
          this.signe = (this.firstval * parseInt(this.display, 0));
        }
        break;
      case '-':
        if (this.iscomma === true) {
          this.signe = (this.firstval - parseFloat(this.display));
        } else {
          // eslint-disable-next-line radix
          this.signe = (this.firstval - parseInt(this.display, 0));
        }
        break;
      case '+':
        if (this.iscomma === true) {
          this.signe = (this.firstval + parseFloat(this.display));
        } else {
          // eslint-disable-next-line radix
          this.signe = (this.firstval + parseInt(this.display));
        }
        break;
    }
    this.resultat = `${this.firstval.toString()}${this.operator}${this.display.toString()}`;
    this.display =  `${this.resultat}`;
    this.displa = `${this.signe}`;
    this.firstval = this.signe;
  }
}
