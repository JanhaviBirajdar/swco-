import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Filter, FileSpreadsheet, Download, CheckCircle2, Clock, AlertCircle, ArrowUpRight, Check, Award } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

export const DashboardShowcase: React.FC = () => {
  const { openDemoModal } = useDemoModal();
  const [activeDept, setActiveDept] = useState<'CSE' | 'ECE' | 'MECH' | 'CIVIL'>('CSE');

  const deptData = {
    CSE: {
      name: 'Computer Science & Engineering',
      code: 'CSE-UG-Tier1',
      totalCourses: 42,
      coursesMetTarget: 38,
      avgAttainment: 78.4,
      targetBenchmark: 70.0,
      attainmentData: [
        { po: 'PO1', title: 'Engg Knowledge', target: 70, actual: 82.5 },
        { po: 'PO2', title: 'Problem Analysis', target: 70, actual: 76.0 },
        { po: 'PO3', title: 'Design/Dev', target: 70, actual: 74.2 },
        { po: 'PO4', title: 'Investigation', target: 65, actual: 71.8 },
        { po: 'PO5', title: 'Modern Tools', target: 70, actual: 86.4 },
        { po: 'PO6', title: 'Engineer & Society', target: 65, actual: 68.0 },
        { po: 'PO7', title: 'Environment', target: 65, actual: 67.5 },
        { po: 'PO8', title: 'Ethics', target: 70, actual: 79.0 },
      ],
      recentActivity: [
        { text: 'Direct attainment finalized for CS302 Database Systems', time: 'Today, 11:30 AM', author: 'Prof. S. Kulkarni', type: 'success' },
        { text: 'Course Exit Survey closed for Batch 2022-26 (224 responses)', time: 'Yesterday', author: 'IQAC Portal', type: 'info' },
        { text: 'CQI Remedial Action Log submitted for PO3 algorithms gap', time: '2 days ago', author: 'Dr. V. Rao', type: 'warning' },
        { text: 'Course file digital sign-off approved for Compiler Design', time: '3 days ago', author: 'HOD CSE', type: 'success' },
      ],
    },
    ECE: {
      name: 'Electronics & Communication Engineering',
      code: 'ECE-UG-Tier1',
      totalCourses: 40,
      coursesMetTarget: 36,
      avgAttainment: 75.2,
      targetBenchmark: 70.0,
      attainmentData: [
        { po: 'PO1', title: 'Engg Knowledge', target: 70, actual: 80.0 },
        { po: 'PO2', title: 'Problem Analysis', target: 70, actual: 73.5 },
        { po: 'PO3', title: 'Design/Dev', target: 70, actual: 71.0 },
        { po: 'PO4', title: 'Investigation', target: 65, actual: 69.4 },
        { po: 'PO5', title: 'Modern Tools', target: 70, actual: 81.2 },
        { po: 'PO6', title: 'Engineer & Society', target: 65, actual: 66.8 },
        { po: 'PO7', title: 'Environment', target: 65, actual: 65.2 },
        { po: 'PO8', title: 'Ethics', target: 70, actual: 77.0 },
      ],
      recentActivity: [
        { text: 'Digital Signal Processing lab rubrics published', time: 'Yesterday', author: 'Prof. M. Iyer', type: 'success' },
        { text: 'Target attainment benchmark reviewed for VLSI Design', time: '3 days ago', author: 'HOD ECE', type: 'info' },
      ],
    },
    MECH: {
      name: 'Mechanical Engineering',
      code: 'ME-UG-Tier1',
      totalCourses: 44,
      coursesMetTarget: 39,
      avgAttainment: 73.8,
      targetBenchmark: 68.0,
      attainmentData: [
        { po: 'PO1', title: 'Engg Knowledge', target: 68, actual: 77.4 },
        { po: 'PO2', title: 'Problem Analysis', target: 68, actual: 72.1 },
        { po: 'PO3', title: 'Design/Dev', target: 68, actual: 70.8 },
        { po: 'PO4', title: 'Investigation', target: 65, actual: 68.9 },
        { po: 'PO5', title: 'Modern Tools', target: 68, actual: 75.3 },
        { po: 'PO6', title: 'Engineer & Society', target: 65, actual: 69.0 },
        { po: 'PO7', title: 'Environment', target: 65, actual: 74.2 },
        { po: 'PO8', title: 'Ethics', target: 68, actual: 76.5 },
      ],
      recentActivity: [
        { text: 'Thermodynamics Course Exit Survey consolidated', time: '2 days ago', author: 'Prof. A. Patil', type: 'success' },
        { text: 'CAD/CAM Laboratory rubric evaluation completed', time: '4 days ago', author: 'Prof. K. Deshmukh', type: 'info' },
      ],
    },
    CIVIL: {
      name: 'Civil Engineering',
      code: 'CE-UG-Tier1',
      totalCourses: 38,
      coursesMetTarget: 35,
      avgAttainment: 74.5,
      targetBenchmark: 68.0,
      attainmentData: [
        { po: 'PO1', title: 'Engg Knowledge', target: 68, actual: 76.2 },
        { po: 'PO2', title: 'Problem Analysis', target: 68, actual: 71.0 },
        { po: 'PO3', title: 'Design/Dev', target: 68, actual: 73.4 },
        { po: 'PO4', title: 'Investigation', target: 65, actual: 70.1 },
        { po: 'PO5', title: 'Modern Tools', target: 68, actual: 72.8 },
        { po: 'PO6', title: 'Engineer & Society', target: 65, actual: 78.5 },
        { po: 'PO7', title: 'Environment', target: 65, actual: 80.2 },
        { po: 'PO8', title: 'Ethics', target: 68, actual: 75.0 },
      ],
      recentActivity: [
        { text: 'Structural Analysis mid-term direct attainment synced', time: '1 day ago', author: 'Dr. N. Joshi', type: 'success' },
        { text: 'Environmental Engineering field visit report filed', time: '3 days ago', author: 'Prof. R. Shinde', type: 'info' },
      ],
    },
  };

  const current = deptData[activeDept];

  return (
    <section className="py-24 bg-white dark:bg-[#050814] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            Institutional Dashboard Showcase
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Real-Time Academic Attainment & Governance
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            From institutional summaries for Governing Councils to course-level direct attainment for faculty, VasuNiti provides complete clarity.
          </p>
        </div>

        {/* Dashboard Shell */}
        <div className="bg-white dark:bg-[#0E1526] rounded-2xl border border-slate-200/90 dark:border-white/[0.08] shadow-2xl overflow-hidden">
          
          {/* Top Bar with Department Filters & Academic Year */}
          <div className="bg-white dark:bg-[#0E1526] px-6 py-4 border-b border-slate-200/80 dark:border-white/[0.06] flex flex-col md:flex-row md:items-center justify-between gap-4">
            
            {/* Department Filter Switcher */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              <span className="text-xs font-semibold text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5" /> Department:
              </span>
              {(['CSE', 'ECE', 'MECH', 'CIVIL'] as const).map((key) => (
                <button
                  key={key}
                  type="button"
                  onClick={() => setActiveDept(key)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                    activeDept === key
                      ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xs'
                      : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
                  }`}
                >
                  {key}
                </button>
              ))}
            </div>

            {/* Academic Year & Cycle */}
            <div className="flex items-center gap-3 text-xs text-slate-600 dark:text-slate-400">
              <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md font-medium">
                Academic Year: <strong className="text-slate-900 dark:text-white">2025–2026</strong>
              </span>
              <span className="bg-slate-100 dark:bg-slate-800 px-2.5 py-1 rounded-md font-medium">
                Cycle: <strong className="text-slate-900 dark:text-white">Even Semester</strong>
              </span>
            </div>
          </div>

          {/* Department Overview Banner */}
          <div className="bg-gradient-to-r from-blue-950 via-indigo-950 to-slate-950 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4 border-b border-white/10">
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-display font-bold text-lg text-white">
                  {current.name}
                </h3>
                <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-slate-300 font-mono">
                  {current.code}
                </span>
              </div>
              <p className="text-xs text-slate-300 mt-0.5">
                Outcome Attainment Benchmark: {current.targetBenchmark}% threshold target
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={openDemoModal}
                className="px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-400 hover:to-indigo-500 text-white text-xs font-semibold transition-all flex items-center gap-1.5 shadow-xs"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Export NBA SAR Dossier</span>
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            
            {/* 4 Summary Stat Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.06]">
                <div className="text-xs text-slate-500 font-medium">Mapped Courses</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {current.totalCourses} / {current.totalCourses}
                </div>
                <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> 100% Course Files Ready
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.06]">
                <div className="text-xs text-slate-500 font-medium">Department Average Attainment</div>
                <div className="text-2xl font-bold text-blue-600 dark:text-blue-400 mt-1">
                  {current.avgAttainment}%
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  Target: {current.targetBenchmark}% (+{(current.avgAttainment - current.targetBenchmark).toFixed(1)}% variance)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.06]">
                <div className="text-xs text-slate-500 font-medium">Courses Meeting Benchmark</div>
                <div className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
                  {current.coursesMetTarget} / {current.totalCourses}
                </div>
                <div className="text-[11px] text-slate-600 dark:text-slate-400 mt-1">
                  {((current.coursesMetTarget / current.totalCourses) * 100).toFixed(0)}% achievement rate
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 dark:bg-[#131C31] border border-slate-200/80 dark:border-white/[0.06]">
                <div className="text-xs text-slate-500 font-medium">CQI Continuous Improvement</div>
                <div className="text-2xl font-bold text-slate-900 dark:text-white mt-1">
                  {current.totalCourses - current.coursesMetTarget} Actions
                </div>
                <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium mt-1">
                  Logged in Remedial Register
                </div>
              </div>
            </div>

            {/* Target vs Actual Attainment Chart & Recent Activity */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              
              {/* Target vs Actual Attainment Chart (8 cols on lg) */}
              <div className="lg:col-span-8 bg-slate-50 dark:bg-[#131C31] rounded-xl p-5 border border-slate-200/80 dark:border-white/[0.06]">
                <div className="flex flex-wrap items-center justify-between gap-2 mb-5">
                  <div>
                    <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white">
                      Programme Outcome Attainment Profile (PO1 – PO8)
                    </h4>
                    <p className="text-xs text-slate-500">
                      Comparing Actual Attainment vs Institutional Target Benchmark ({current.targetBenchmark}%)
                    </p>
                  </div>
                  <div className="flex items-center gap-3 text-xs">
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-blue-600 inline-block" /> Actual Attainment
                    </span>
                    <span className="flex items-center gap-1.5">
                      <span className="w-3 h-3 rounded bg-slate-300 dark:bg-slate-600 inline-block" /> Target Benchmark
                    </span>
                  </div>
                </div>

                {/* Bar chart representation */}
                <div className="space-y-3.5">
                  {current.attainmentData.map((item) => {
                    const isAbove = item.actual >= item.target;
                    return (
                      <div key={item.po} className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span className="font-semibold text-slate-800 dark:text-slate-200">
                            {item.po}: <span className="font-normal text-slate-500">{item.title}</span>
                          </span>
                          <span className="font-mono font-semibold">
                            <span className={isAbove ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'}>
                              {item.actual}%
                            </span>
                            <span className="text-slate-400 text-[11px]"> / {item.target}% target</span>
                          </span>
                        </div>

                        {/* Dual Bar Track */}
                        <div className="relative h-4 bg-slate-200 dark:bg-slate-700 rounded-md overflow-hidden">
                          {/* Target line indicator */}
                          <div
                            className="absolute top-0 bottom-0 w-0.5 bg-slate-500 z-10"
                            style={{ left: `${item.target}%` }}
                            title={`Target: ${item.target}%`}
                          />
                          {/* Actual progress bar */}
                          <div
                            className={`h-full rounded-md transition-all duration-300 ${
                              isAbove ? 'bg-gradient-to-r from-blue-600 to-indigo-600' : 'bg-amber-500'
                            }`}
                            style={{ width: `${Math.min(item.actual, 100)}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/80 dark:border-white/[0.06] flex justify-between text-[11px] text-slate-500">
                  <span>Direct CIE (80%) + Indirect Course Exit Survey (20%)</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">All 8 POs meet or exceed threshold target</span>
                </div>
              </div>

              {/* Recent Academic Activity Feed (4 cols on lg) */}
              <div className="lg:col-span-4 bg-slate-50 dark:bg-[#131C31] rounded-xl p-5 border border-slate-200/80 dark:border-white/[0.06] flex flex-col justify-between">
                <div>
                  <h4 className="font-display font-bold text-sm text-slate-900 dark:text-white mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                    Recent Academic Activity
                  </h4>

                  <div className="space-y-3">
                    {current.recentActivity.map((act, i) => (
                      <div key={i} className="text-xs p-2.5 rounded-lg bg-white dark:bg-[#0E1526] border border-slate-200/70 dark:border-white/[0.06]">
                        <div className="font-medium text-slate-800 dark:text-slate-200 mb-1">
                          {act.text}
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-slate-400">
                          <span>{act.author}</span>
                          <span>{act.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-200/80 dark:border-white/[0.06]">
                  <button
                    type="button"
                    onClick={openDemoModal}
                    className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold transition-all shadow-md flex items-center justify-center gap-1.5"
                  >
                    <span>Request Full Institutional Access</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>

            {/* Illustrative Disclaimer Required by Master Prompt */}
            <div className="p-3 bg-slate-100 dark:bg-white/[0.04] rounded-xl border border-slate-200/80 dark:border-white/[0.06] text-xs text-slate-500 dark:text-slate-400 text-center">
              <strong>Illustrative Sample Data:</strong> The figures, course names, and attainment percentages shown above are for demonstration purposes to showcase VasuNiti's analytical interface.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
