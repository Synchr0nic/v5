// src/pages/Profile.tsx
import React, { useState } from 'react';
import { User, Edit2, MapPin, Link as LinkIcon, Twitter, Github, Trophy, Star } from 'lucide-react';
import { useProject } from '../contexts/ProjectContext';

const projects = [
  {
    title: "Neon Nights",
    role: "Sound Designer",
    status: "In Progress",
    collaborators: 4,
    image: "https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80"
  },
  {
    title: "Urban Stories",
    role: "Project Lead",
    status: "Completed",
    collaborators: 6,
    image: "https://images.unsplash.com/photo-1515462250-33bd709cbe85?auto=format&fit=crop&q=80"
  }
];

const achievements = [
  {
    title: "Top Contributor",
    description: "Awarded for being the top contributor in the month of January.",
    icon: Trophy
  },
  {
    title: "Innovator of the Year",
    description: "Recognized for innovative contributions to multiple projects.",
    icon: Star
  }
];

const creatorScore = 1500; // Example score

export function Profile() {
  const { activeColor } = useProject();
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'score', label: 'Creator Score' }
  ];

  return (
    <div className="space-y-8">
      <div className="relative h-48 rounded-xl overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?auto=format&fit=crop&q=80"
          alt="Cover"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>

      <div className="relative -mt-20 space-y-6">
        <div className="flex items-end justify-between">
          <div className="flex items-end gap-6">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80"
              alt="Profile"
              className="w-32 h-32 rounded-xl border-4 border-black object-cover"
            />
            <div>
              <h1 className="text-3xl font-light">Alex Chen</h1>
              <p className="text-zinc-400">Sound Designer & Music Producer</p>
            </div>
          </div>
          <button
            className="px-4 py-2 rounded-lg flex items-center gap-2 transition-colors duration-700"
            style={{
              backgroundColor: activeColor
                ? `rgba(${activeColor}, 0.1)`
                : 'rgba(255, 255, 255, 0.05)'
            }}
          >
            <Edit2 className="h-4 w-4" />
            Edit Profile
          </button>
        </div>

        <div className="flex gap-6 text-sm text-zinc-400">
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            San Francisco, CA
          </div>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <LinkIcon className="h-4 w-4" />
            alexchen.com
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <Twitter className="h-4 w-4" />
            @alexchen
          </a>
          <a href="#" className="flex items-center gap-2 hover:text-white">
            <Github className="h-4 w-4" />
            alexchen
          </a>
        </div>

        <div className="flex gap-4 border-b border-zinc-800 pb-4">
          {tabs.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => setActiveTab(id)}
              className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                activeTab === id ? 'text-white' : 'text-zinc-400 hover:text-white'
              }`}
              style={{
                backgroundColor: activeTab === id
                  ? activeColor
                    ? `rgba(${activeColor}, 0.1)`
                    : 'rgba(255, 255, 255, 0.05)'
                  : 'transparent',
                boxShadow: activeTab === id && activeColor
                  ? `0 0 20px rgba(${activeColor}, 0.1)`
                  : 'none'
              }}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {activeTab === 'overview' && (
            <>
              <div
                className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-700 hover:border-opacity-50 group"
                style={{
                  borderColor: activeColor ? `rgba(${activeColor}, 0.2)` : ''
                }}
              >
                <div className="relative">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-light mb-1">{projects[0].title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-zinc-300">{projects[0].role}</span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-400">{projects[0].collaborators} collaborators</span>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="bg-zinc-900/50 rounded-xl overflow-hidden border border-zinc-800 transition-all duration-700 hover:border-opacity-50 group"
                style={{
                  borderColor: activeColor ? `rgba(${activeColor}, 0.2)` : ''
                }}
              >
                <div className="relative">
                  <img
                    src={projects[1].image}
                    alt={projects[1].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-xl font-light mb-1">{projects[1].title}</h3>
                    <div className="flex items-center gap-2 text-sm">
                      <span className="text-zinc-300">{projects[1].role}</span>
                      <span className="text-zinc-400">•</span>
                      <span className="text-zinc-400">{projects[1].collaborators} collaborators</span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 transition-all duration-700"
                  style={{
                    borderColor: activeColor ? `rgba(${activeColor}, 0.2)` : undefined
                  }}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <achievement.icon className="h-8 w-8 text-zinc-400" />
                    <h3 className="text-xl font-light">{achievement.title}</h3>
                  </div>
                  <p className="text-zinc-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'score' && (
            <div className="bg-zinc-900/50 rounded-xl p-6 border border-zinc-800 transition-all duration-700"
            style={{
              borderColor: activeColor ? `rgba(${activeColor}, 0.2)` : undefined
            }}
            >
              <h2 className="text-2xl font-light mb-4">Creator Score</h2>
              <p className="text-zinc-400 mb-6">Your creator score is determined by the number of contributions you have made across various projects.</p>
              <div className="text-4xl font-bold text-center">{creatorScore}</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
