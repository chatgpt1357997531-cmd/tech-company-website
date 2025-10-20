export interface Service {
    id: number;
    title: string;
    description: string;
}

export interface TeamMember {
    id: number;
    name: string;
    role: string;
    photoUrl: string;
}

export interface ContactForm {
    name: string;
    email: string;
    message: string;
}

export interface ApiResponse<T> {
    data: T;
    error?: string;
}