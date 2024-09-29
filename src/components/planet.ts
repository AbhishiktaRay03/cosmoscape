import { ComponentType } from 'react';

export interface Planet {
  name: string;
  component: ComponentType;
  texture: string;
}

export interface PlanetData {
  basicFacts: string[];
  exploration: string[];
  missionsHistory: string[];
}