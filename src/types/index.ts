export interface Project {
  id: string;
  name: string;
  location: string;
  typology: string;
  constructionSystem: string;
  keyFeature: string;
  category: 'Resorts & Eco-Stays' | 'Boutique Hotels' | 'Farmhouses & Retreats' | 'Modular & Domes';
  area: string;
  image: string;
  gallery?: string[];
  description: string;
  highlights: string[];
}

export interface WhatWeBuildItem {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  highlights: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  description: string;
  category: 'Planning & Design' | 'Prefabrication & Fabrication' | 'Envelope & Execution' | 'Hospitality';
  icon: string;
  details?: string[];
}

export interface ConstructionSystemItem {
  id: string;
  name: string;
  tag: string;
  category: string;
  coreMetric: string;
  description: string;
  advantages: string[];
  specs: { label: string; value: string }[];
  application: string;
  image: string;
}

export interface ProcessStage {
  step: string;
  title: string;
  description: string;
  focus: string;
}

export interface WhyHinduraItem {
  title: string;
  tagline: string;
  description: string;
  icon: string;
}