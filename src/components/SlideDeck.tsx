"use client";

import React, { useState } from 'react';
import Slide from './Slide';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface SlideData {
  id: number;
  title: string;
  content: React.ReactNode;
  type?: 'title' | 'content' | 'summary';
}

const SlideDeck: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides: SlideData[] = [
    {
      id: 1,
      title: "Testing Throughout the Software Development Lifecycle",
      content: (
        <div className="text-center space-y-8">
          <h2 className="text-3xl font-semibold text-blue-600">ISTQB v4.0 Foundation Level</h2>
          <div className="space-y-4">
            <p className="text-xl text-gray-700">Comprehensive Guide to SDLC Testing</p>
            <p className="text-lg text-gray-600">Testing in Different Models • Shift-Left & Shift-Right • Test Levels</p>
          </div>
          <div className="mt-12 text-gray-500">
            <p>Presented by: [Team Name]</p>
            <p>{new Date().toLocaleDateString()}</p>
          </div>
        </div>
      ),
      type: 'title'
    },
    {
      id: 2,
      title: "SDLC Models Overview",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-blue-700 mb-3">Waterfall Model</h3>
              <ul className="text-sm space-y-2">
                <li>• Sequential phases</li>
                <li>• Testing at the end</li>
                <li>• Comprehensive documentation</li>
                <li>• Suitable for stable requirements</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-3">Agile Model</h3>
              <ul className="text-sm space-y-2">
                <li>• Iterative development</li>
                <li>• Continuous testing</li>
                <li>• Frequent feedback</li>
                <li>• Adaptive to changes</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-3">V-Model</h3>
              <ul className="text-sm space-y-2">
                <li>• Verification & Validation</li>
                <li>• Testing planned early</li>
                <li>• Each dev phase has test phase</li>
                <li>• Structured approach</li>
              </ul>
            </div>
          </div>
          <p className="text-gray-600 text-center mt-6">Each model has unique testing characteristics and approaches</p>
        </div>
      ),
      type: 'content'
    },
    {
      id: 3,
      title: "Waterfall Model Testing",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-blue-800 mb-4">Sequential Testing Approach</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Characteristics:</h4>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Testing occurs after development completion</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Extensive test planning and documentation</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Formal test execution and reporting</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3"></span>
                  <span>Clear entry and exit criteria</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4 text-gray-800">Benefits & Challenges:</h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded">
                  <h5 className="font-medium text-green-700">Benefits:</h5>
                  <p className="text-sm text-green-600">Thorough testing, comprehensive documentation</p>
                </div>
                <div className="bg-red-50 p-4 rounded">
                  <h5 className="font-medium text-red-700">Challenges:</h5>
                  <p className="text-sm text-red-600">Late defect detection, limited flexibility</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
      type: 'content'
    },
    {
      id: 4,
      title: "Agile & V-Model Testing",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-green-700 mb-4">Agile Testing</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Key Principles:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Testing throughout iterations</li>
                    <li>• Whole team approach</li>
                    <li>• Early and frequent feedback</li>
                    <li>• Continuous integration</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Test Levels:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Unit testing (TDD)</li>
                    <li>• Integration testing</li>
                    <li>• System testing</li>
                    <li>• Acceptance testing</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-purple-700 mb-4">V-Model Testing</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Verification Activities:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Requirements review</li>
                    <li>• Design review</li>
                    <li>• Code review</li>
                    <li>• Test case review</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Validation Activities:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Unit testing</li>
                    <li>• Integration testing</li>
                    <li>• System testing</li>
                    <li>• User acceptance testing</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg text-center">
            <p className="text-gray-700">Both models emphasize early test planning and continuous quality assurance</p>
          </div>
        </div>
      ),
      type: 'content'
    },
    {
      id: 5,
      title: "Shift-Left and Shift-Right Testing",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Modern Testing Approaches</h3>
            <p className="text-gray-600">Early and Continuous Testing Strategies</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
              <h3 className="text-xl font-semibold text-blue-700 mb-4">Shift-Left Testing</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 mb-3">Moving testing activities earlier in the SDLC</p>
                <div>
                  <h4 className="font-medium mb-2">Key Activities:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Early test planning</li>
                    <li>• Requirements testing</li>
                    <li>• Static analysis</li>
                    <li>• Unit testing (TDD)</li>
                    <li>• Code reviews</li>
                  </ul>
                </div>
                <div className="bg-blue-100 p-3 rounded">
                  <h5 className="font-medium text-blue-800">Benefits:</h5>
                  <p className="text-xs text-blue-700">Reduced costs, early defect detection, improved quality</p>
                </div>
              </div>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-500">
              <h3 className="text-xl font-semibold text-orange-700 mb-4">Shift-Right Testing</h3>
              <div className="space-y-4">
                <p className="text-sm text-gray-700 mb-3">Testing in production and post-deployment</p>
                <div>
                  <h4 className="font-medium mb-2">Key Activities:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Production monitoring</li>
                    <li>• A/B testing</li>
                    <li>• Canary releases</li>
                    <li>• User feedback analysis</li>
                    <li>• Performance monitoring</li>
                  </ul>
                </div>
                <div className="bg-orange-100 p-3 rounded">
                  <h5 className="font-medium text-orange-800">Benefits:</h5>
                  <p className="text-xs text-orange-700">Real user insights, continuous improvement, risk mitigation</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-orange-50 p-4 rounded-lg text-center">
            <p className="text-gray-700 font-medium">Combined approach provides comprehensive quality assurance throughout the entire lifecycle</p>
          </div>
        </div>
      ),
      type: 'content'
    },
    {
      id: 6,
      title: "Test Levels and Their Objectives",
      content: (
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-green-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-green-700 mb-3">Unit Testing</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>Objective:</strong> Test individual components</p>
                <p className="text-sm"><strong>Focus:</strong> Code logic, data handling</p>
                <p className="text-sm"><strong>Tools:</strong> JUnit, NUnit, pytest</p>
                <p className="text-sm"><strong>Who:</strong> Developers</p>
              </div>
            </div>
            <div className="bg-blue-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-700 mb-3">Integration Testing</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>Objective:</strong> Test component interactions</p>
                <p className="text-sm"><strong>Focus:</strong> Interfaces, data flow</p>
                <p className="text-sm"><strong>Types:</strong> Big Bang, Incremental</p>
                <p className="text-sm"><strong>Who:</strong> Developers/Testers</p>
              </div>
            </div>
            <div className="bg-purple-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-700 mb-3">System Testing</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>Objective:</strong> Test complete system</p>
                <p className="text-sm"><strong>Focus:</strong> End-to-end functionality</p>
                <p className="text-sm"><strong>Types:</strong> Functional, Performance</p>
                <p className="text-sm"><strong>Who:</strong> Test Team</p>
              </div>
            </div>
            <div className="bg-orange-50 p-5 rounded-lg">
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Acceptance Testing</h3>
              <div className="space-y-2">
                <p className="text-sm"><strong>Objective:</strong> Validate business requirements</p>
                <p className="text-sm"><strong>Focus:</strong> User needs, business value</p>
                <p className="text-sm"><strong>Types:</strong> UAT, BAT, Alpha/Beta</p>
                <p className="text-sm"><strong>Who:</strong> End Users/Business</p>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="font-semibold mb-2 text-center">Test Level Pyramid</h4>
            <div className="flex justify-center">
              <div className="text-center space-y-1">
                <div className="bg-orange-200 px-8 py-2 text-sm">Acceptance</div>
                <div className="bg-purple-200 px-12 py-2 text-sm">System</div>
                <div className="bg-blue-200 px-16 py-2 text-sm">Integration</div>
                <div className="bg-green-200 px-20 py-2 text-sm">Unit</div>
              </div>
            </div>
          </div>
        </div>
      ),
      type: 'content'
    },
    {
      id: 7,
      title: "Summary & Best Practices",
      content: (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Key Takeaways</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-3 text-blue-700">SDLC Model Selection</h4>
              <ul className="space-y-2 text-sm">
                <li>• Choose model based on project requirements</li>
                <li>• Consider team size and experience</li>
                <li>• Evaluate risk tolerance</li>
                <li>• Assess change frequency</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-3 text-green-700">Testing Strategy</h4>
              <ul className="space-y-2 text-sm">
                <li>• Implement both Shift-Left and Shift-Right</li>
                <li>• Balance all test levels appropriately</li>
                <li>• Automate where possible</li>
                <li>• Continuous improvement mindset</li>
              </ul>
            </div>
          </div>
          <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-800 mb-2">Best Practices</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div>
                <h5 className="font-medium">Planning</h5>
                <p>Early test planning, risk-based testing, clear objectives</p>
              </div>
              <div>
                <h5 className="font-medium">Execution</h5>
                <p>Continuous testing, automation, feedback loops</p>
              </div>
              <div>
                <h5 className="font-medium">Improvement</h5>
                <p>Metrics analysis, lessons learned, process optimization</p>
              </div>
            </div>
          </div>
        </div>
      ),
      type: 'summary'
    },
    {
      id: 8,
      title: "Team Roles Assignment",
      content: (
        <div className="space-y-6">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Project Team Structure</h3>
            <p className="text-gray-600">Roles and Responsibilities for SDLC Testing Implementation</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-blue-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-blue-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎤</span>
              </div>
              <h4 className="text-lg font-semibold text-blue-700 mb-2">Speaker/Presenter</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>• Deliver presentation</li>
                <li>• Handle Q&A sessions</li>
                <li>• Coordinate timing</li>
                <li>• Engage audience</li>
              </ul>
            </div>
            <div className="bg-green-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-green-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🔍</span>
              </div>
              <h4 className="text-lg font-semibold text-green-700 mb-2">Researcher</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>• ISTQB v4.0 materials</li>
                <li>• Industry best practices</li>
                <li>• Case studies</li>
                <li>• Current trends</li>
              </ul>
            </div>
            <div className="bg-purple-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-purple-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <h4 className="text-lg font-semibold text-purple-700 mb-2">Designer</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>• Visual design</li>
                <li>• Slide layouts</li>
                <li>• Graphics creation</li>
                <li>• Brand consistency</li>
              </ul>
            </div>
            <div className="bg-orange-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-orange-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📝</span>
              </div>
              <h4 className="text-lg font-semibold text-orange-700 mb-2">Content Writer</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>• Technical content</li>
                <li>• Script preparation</li>
                <li>• Documentation</li>
                <li>• Proofreading</li>
              </ul>
            </div>
            <div className="bg-red-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-red-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">⚙️</span>
              </div>
              <h4 className="text-lg font-semibold text-red-700 mb-2">Technical Lead</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>• Technical accuracy</li>
                <li>• Implementation details</li>
                <li>• Tool recommendations</li>
                <li>• Architecture guidance</li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl">📊</span>
              </div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Project Manager</h4>
              <ul className="text-sm space-y-1 text-left">
                <li>• Timeline management</li>
                <li>• Resource coordination</li>
                <li>• Quality assurance</li>
                <li>• Stakeholder communication</li>
              </ul>
            </div>
          </div>
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg text-center">
            <p className="text-gray-700 font-medium">Successful SDLC testing requires collaborative effort from all team members</p>
          </div>
        </div>
      ),
      type: 'content'
    }
  ];

  const nextSlide = () => {
    if (currentSlide < slides.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* PowerPoint-style header */}
      <div className="bg-white shadow-sm border-b px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-semibold text-gray-800">Testing Throughout SDLC</h1>
          <span className="text-sm text-gray-500">ISTQB v4.0 Presentation</span>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-600">
            Slide {currentSlide + 1} of {slides.length}
          </span>
        </div>
      </div>

      {/* Main slide area */}
      <div className="flex-1 flex">
        {/* Slide thumbnails sidebar */}
        <div className="w-64 bg-white border-r shadow-sm overflow-y-auto">
          <div className="p-4">
            <h3 className="text-sm font-semibold text-gray-700 mb-3">Slides</h3>
            <div className="space-y-2">
              {slides.map((slide, index) => (
                <div
                  key={slide.id}
                  onClick={() => goToSlide(index)}
                  className={`p-3 rounded cursor-pointer transition-colors ${
                    currentSlide === index
                      ? 'bg-blue-100 border-2 border-blue-300'
                      : 'bg-gray-50 hover:bg-gray-100 border-2 border-transparent'
                  }`}
                >
                  <div className="text-xs font-medium text-gray-600 mb-1">
                    Slide {slide.id}
                  </div>
                  <div className="text-sm font-medium text-gray-800 line-clamp-2">
                    {slide.title}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Main slide content */}
        <div className="flex-1 flex flex-col">
          <div className="flex-1 p-8 flex items-center justify-center">
            <div className="w-full max-w-6xl">
              <Slide
                title={slides[currentSlide].title}
                content={slides[currentSlide].content}
                type={slides[currentSlide].type}
              />
            </div>
          </div>

          {/* Navigation controls */}
          <div className="bg-white border-t px-6 py-4 flex justify-between items-center">
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Previous</span>
            </Button>

            <div className="flex space-x-2">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    currentSlide === index ? 'bg-blue-500' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === slides.length - 1}
              variant="outline"
              size="sm"
              className="flex items-center space-x-2"
            >
              <span>Next</span>
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlideDeck;
