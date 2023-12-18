import { Injectable } from "@angular/core";

@Injectable()
export class GptService {
    private apiKey: string | undefined;

    private readonly headers = {
        "Content-Type": "application/json",
        "Authorization": "Bearer "
    }

    constructor() {
        this.loadFromDisk();
    }

    public setApiKey(apiKey: string): void {
        this.apiKey = apiKey;
    }

    public getApiKey(): string | undefined {
        return this.apiKey;
    }

    public saveOnDisk(): void {
        localStorage.setItem("apiKey", this.apiKey || "");
    }

    public loadFromDisk(): void {
        this.apiKey = localStorage.getItem("apiKey") || undefined;
    }

    public query(prompt: string, b64Image: string): Promise<any> {
        throw new Error("Method not implemented.");
    }
}