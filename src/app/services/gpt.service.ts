import { Injectable } from "@angular/core";

@Injectable()
export class GptService {
    private readonly headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer "
    }

    public query(prompt: string, b64Image: string): Promise<any> {
        fetch
    }
}