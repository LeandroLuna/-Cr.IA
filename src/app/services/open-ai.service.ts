import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class OpenAIService {
  private baseURL = 'https://api.openai.com/v1';
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) { }

  generateImage(prompt: string, imageSize: string, quantity: number){
    const params = {
      prompt: prompt,
      size: imageSize,
      n: quantity
    };

    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    };

    return this.http.post(`${this.baseURL}/images/generations`, params, {headers});
  }
}
