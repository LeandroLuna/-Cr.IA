import { OpenAIService } from './services/open-ai.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  generatedImages: string[];
  isLoading: boolean;

  formData = {
    prompt: '',
    size: '256x256',
    quantity: 6
  }

  constructor(private openai: OpenAIService){}

  ngOnInit(): void {
    this.isLoading = false;
  }

  onLoadImages(){
    this.isLoading = true;
    this.openai.generateImage(this.formData.prompt, this.formData.size, this.formData.quantity)
      .subscribe((response: any) => {
        this.generatedImages = response.data;
        this.isLoading = false;
      });
  }
}
