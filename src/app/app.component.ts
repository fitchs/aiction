import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG } from '../environments/environment';
import { ElectronService } from './services/electron.service';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { GptService } from './services/gpt.service';
import { MatDialog } from '@angular/material/dialog';
import { OpenaiApiKeyDialogComponent } from './openai-api-key-dialog/openai-api-key-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form: FormGroup = new FormGroup({
    prompt: new FormControl('', Validators.required),
    image: new FormControl('', this.fileValidator),
  });

  constructor(
    private electronService: ElectronService,
    private gptService: GptService,
    private dialog: MatDialog
  ) {
  }

  

  public fileValidator(control: AbstractControl): ValidationErrors | null {
    let file = control.value;
    if (file && file.size > 0) {
      return null;
    } else {
      return { 'fileRequired': true };
    }
  }
  
  
  public onFileChange(event: any): void {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.patchValue({
        image: file
      });
    }
  }

  public openSetApiKeyDialog(): void {
    this.dialog.open(OpenaiApiKeyDialogComponent);
  }

  public submit(): void {

    this.form.setValue({
      prompt: '',
      image: ''
    });
    console.log(this.form.value);
  }
}
