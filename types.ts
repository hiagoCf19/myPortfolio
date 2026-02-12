import React from 'react';

export interface Project {
  id: number;
  title: string;
  category?: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Experience {
  id: number;
  role: string;
  company: string;
  period: string;
  description: string[];
  url?: string;
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level?: number; // 1-100
}

export interface SocialLink {
  name: string;
  url: string;
  icon: React.ReactNode;
}