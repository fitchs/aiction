import { Component } from '@angular/core';
import { GptService } from '../services/gpt.service';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-openai-api-key-dialog',
  templateUrl: './openai-api-key-dialog.component.html',
  styleUrl: './openai-api-key-dialog.component.scss'
})
export class OpenaiApiKeyDialogComponent {
  public apiKey: string | undefined;

  constructor(private gptService: GptService, public dialogRef: MatDialogRef<OpenaiApiKeyDialogComponent>) {
    this.apiKey = this.gptService.getApiKey();
  }

  public save(): void {
    console.log(this.apiKey);
    
    if (!this.apiKey) {
      return;
    }
    this.gptService.setApiKey(this.apiKey);
    this.dialogRef.close();
  }
}
