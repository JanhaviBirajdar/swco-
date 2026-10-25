import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Info, RotateCcw, Sparkles, BookOpen, Layers, CheckCircle2, AlertCircle } from 'lucide-react';
import { useDemoModal } from '../../context/DemoModalContext';

interface CellInfo {
  coCode: string;
  coName: string;
  bloomsLevel: string;
  poCode: string;
  poName: string;
  correlation: number;
  justification: string;
}

export const InteractiveMappingDemo: React.FC = () => {
  const { openDemoModal } = useDemoModal();

  // Initial matrix data as required by master prompt
  const initialMatrix = [
    { co: 'CO1', po1: 3, po2: 2, po3: 1, po4: 0, po5: 0, pso1: 2 },
    { co: 'CO2', po1: 2, po2: 3, po3: 2, po4: 1, po5: 1, pso1: 3 },
    { co: 'CO3', po1: 1, po2: 2, po3: 3, po4: 2, po5: 2, pso1: 2 },
    { co: 'CO4', po1: 3, po2: 1, po3: 2, po4: 3, po5: 1, pso1: 3 },
  ];

  const [matrixData, setMatrixData] = useState(initialMatrix);
  const [selectedCell, setSelectedCell] = useState<{ co: string; po: string }>({ co: 'CO2', po: 'po2' });

  // Outcome metadata
  const coDetails: Record<string, { title: string; blooms: string; description: string }> = {
    CO1: {
      title: 'Foundational Knowledge & Mathematical Concepts',
      blooms: 'L2 (Understand)',
      description: 'Explain core database concepts, relational data structures, and relational algebra operations.',
    },
    CO2: {
      title: 'Schema Design & Formal Normalization',
      blooms: 'L3 (Apply)',
      description: 'Design and implement normalized database schemas (1NF, 2NF, 3NF, BCNF) to eliminate operational anomalies.',
    },
    CO3: {
      title: 'Complex Querying & Performance Tuning',
      blooms: 'L4 (Analyze)',
      description: 'Construct advanced SQL queries, optimize execution plans, and evaluate transaction concurrency protocols.',
    },
    CO4: {
      title: 'System Integration & Capstone Application',
      blooms: 'L5 (Evaluate)',
      description: 'Evaluate, design, and secure multi-tier enterprise database applications adhering to integrity constraints.',
    },
  };

  const poDetails: Record<string, { code: string; title: string; graduateAttribute: string }> = {
    po1: { code: 'PO1', title: 'Engineering Knowledge', graduateAttribute: 'Apply mathematics, science, and engineering fundamentals to complex engineering problems.' },
    po2: { code: 'PO2', title: 'Problem Analysis', graduateAttribute: 'Identify, formulate, and analyze complex engineering problems reaching substantiated conclusions.' },
    po3: { code: 'PO3', title: 'Design / Development of Solutions', graduateAttribute: 'Design solutions for complex engineering problems and design systems that meet specified needs.' },
    po4: { code: 'PO4', title: 'Conduct Investigations of Complex Problems', graduateAttribute: 'Use research-based knowledge and methods including design of experiments to provide valid conclusions.' },
    po5: { code: 'PO5', title: 'Modern Tool Usage', graduateAttribute: 'Create, select, and apply appropriate techniques, resources, and modern engineering IT tools.' },
    pso1: { code: 'PSO1', title: 'Specialized Enterprise Architecture', graduateAttribute: 'Demonstrate domain competence in scalable software design, database persistence, and cloud systems.' },
  };

  const cellJustifications: Record<string, string> = {
    'CO1-po1': 'Directly requires fundamental mathematical discrete logic and set theory principles.',
    'CO1-po2': 'Requires students to analyze raw data requirements to determine appropriate entity models.',
    'CO1-po3': 'Limited solution design at introductory concept phase.',
    'CO1-po4': 'No experimental investigation involved at this stage.',
    'CO2-po1': 'Applies functional dependencies and relational algebra algorithms.',
    'CO2-po2': 'Substantially involves decomposing schema redundancies and diagnosing insertion/deletion anomalies.',
    'CO2-po3': 'Students formulate structural relational schemas meeting real-world institutional specifications.',
    'CO2-po4': 'Investigates boundary conditions and constraint violations.',
    'CO3-po1': 'Relies on relational calculus and indexing structures.',
    'CO3-po2': 'Analyzes bottlenecks in indexing and transaction isolation levels.',
    'CO3-po3': 'Designs optimized query execution trees and multi-table views.',
    'CO3-po4': 'Performs benchmarking experiments comparing query execution times.',
    'CO4-po1': 'Synthesizes complete engineering stack architecture.',
    'CO4-po2': 'Evaluates security loopholes and concurrency race conditions.',
    'CO4-po3': 'Full end-to-end design of persistent database layer for client application.',
    'CO4-po4': 'Tests stress loads, ACID compliance, and disaster recovery replication.',
  };

  // Cell correlation cycling (0 -> 1 -> 2 -> 3 -> 0)
  const handleCellClick = (coCode: string, poKey: string) => {
    setSelectedCell({ co: coCode, po: poKey });
    setMatrixData((prev) =>
      prev.map((row) => {
        if (row.co === coCode) {
          const currentVal = (row as any)[poKey];
          const nextVal = (currentVal + 1) % 4;
          return { ...row, [poKey]: nextVal };
        }
        return row;
      })
    );
  };

  const resetMatrix = () => {
    setMatrixData(initialMatrix);
    setSelectedCell({ co: 'CO2', po: 'po2' });
  };

  // Helper for heatmap colors
  const getHeatmapClass = (val: number) => {
    switch (val) {
      case 3:
        return 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold shadow-sm';
      case 2:
        return 'bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 font-semibold border border-indigo-200/60 dark:border-indigo-800/60';
      case 1:
        return 'bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 font-medium border border-blue-200/50 dark:border-blue-900/50';
      case 0:
      default:
        return 'bg-slate-100 dark:bg-slate-800/80 text-slate-400 dark:text-slate-500 font-normal border border-transparent';
    }
  };

  // Compute live averages
  const getRowAvg = (row: any) => {
    const vals = [row.po1, row.po2, row.po3, row.po4];
    const nonZero = vals.filter((v) => v > 0);
    if (nonZero.length === 0) return '0.00';
    return (vals.reduce((a, b) => a + b, 0) / vals.length).toFixed(2);
  };

  const getColAvg = (poKey: string) => {
    const sum = matrixData.reduce((acc, row) => acc + (row as any)[poKey], 0);
    return (sum / matrixData.length).toFixed(2);
  };

  const activeRow = matrixData.find((r) => r.co === selectedCell.co);
  const activeVal = activeRow ? (activeRow as any)[selectedCell.po] : 0;
  const activeJustification =
    cellJustifications[`${selectedCell.co}-${selectedCell.po}`] ||
    `Correlation level ${activeVal} assigned to align with course learning targets.`;

  return (
    <section id="interactive-demo" className="py-24 bg-slate-50 dark:bg-[#070C18] border-b border-slate-200/90 dark:border-white/[0.06] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 text-blue-700 dark:text-blue-400 border border-blue-200/80 dark:border-blue-500/25 text-xs font-semibold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive Demonstration
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Try the Interactive CO–PO Mapping Matrix
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
            Click any cell to adjust correlation levels (0 → 1 → 2 → 3) or inspect the underlying Bloom’s outcome justification rubric in real time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left / Main: The Interactive Matrix Table (7 cols on lg) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#0E1526] rounded-2xl border border-slate-200/90 dark:border-white/[0.08] p-5 sm:p-6 shadow-sm">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4 pb-3 border-b border-slate-100 dark:border-white/[0.06]">
              <div>
                <h3 className="font-display font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Layers className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  CS302: Database Management Systems
                </h3>
                <span className="text-xs text-slate-500">Curriculum Regulation: Autonomous 2024-Scheme</span>
              </div>
              <button
                type="button"
                onClick={resetMatrix}
                className="text-xs font-medium text-slate-500 hover:text-[#315FEA] flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg border border-slate-200 dark:border-slate-700 transition-colors"
                title="Reset sample matrix values"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Matrix</span>
              </button>
            </div>

            {/* Matrix Table with Horizontal Scroll for Mobile */}
            <div className="overflow-x-auto pb-2">
              <table className="w-full text-xs text-left border-collapse min-w-[500px]">
                <thead>
                  <tr className="bg-[#F5F7FB] dark:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold border-b border-slate-200 dark:border-slate-700">
                    <th className="py-2.5 px-3 w-28">Course Outcome</th>
                    <th className="py-2.5 px-3 text-center">PO1</th>
                    <th className="py-2.5 px-3 text-center">PO2</th>
                    <th className="py-2.5 px-3 text-center">PO3</th>
                    <th className="py-2.5 px-3 text-center">PO4</th>
                    <th className="py-2.5 px-3 text-center text-[#315FEA]">Row Avg</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 dark:divide-slate-800/80">
                  {matrixData.map((row) => (
                    <tr key={row.co} className="hover:bg-slate-50/70 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-3 px-3 font-semibold text-slate-900 dark:text-white flex items-center gap-1.5">
                        <span className="text-[#315FEA] font-bold">{row.co}</span>
                        <span className="text-[10px] text-slate-500 font-normal">
                          {row.co === 'CO1' && '(L2)'}
                          {row.co === 'CO2' && '(L3)'}
                          {row.co === 'CO3' && '(L4)'}
                          {row.co === 'CO4' && '(L5)'}
                        </span>
                      </td>

                      {(['po1', 'po2', 'po3', 'po4'] as const).map((poKey) => {
                        const val = (row as any)[poKey];
                        const isSelected = selectedCell.co === row.co && selectedCell.po === poKey;

                        return (
                          <td key={poKey} className="py-2 px-2 text-center">
                            <button
                              type="button"
                              onClick={() => handleCellClick(row.co, poKey)}
                              onMouseEnter={() => setSelectedCell({ co: row.co, po: poKey })}
                              className={`w-10 h-9 mx-auto rounded-lg text-xs transition-all duration-150 flex items-center justify-center cursor-pointer select-none ${getHeatmapClass(
                                val
                              )} ${
                                isSelected
                                  ? 'ring-2 ring-[#315FEA] ring-offset-1 dark:ring-offset-[#111827] scale-105 shadow-md'
                                  : 'hover:scale-105'
                              }`}
                              title={`Click to cycle correlation for ${row.co} to ${poKey.toUpperCase()}`}
                            >
                              {val === 0 ? '-' : val}
                            </button>
                          </td>
                        );
                      })}

                      {/* Row Avg */}
                      <td className="py-3 px-3 text-center font-bold text-[#315FEA]">
                        {getRowAvg(row)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="bg-[#F5F7FB] dark:bg-slate-800/90 font-semibold border-t-2 border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white">
                    <td className="py-2.5 px-3">Column Avg.</td>
                    <td className="py-2.5 px-3 text-center text-[#315FEA]">{getColAvg('po1')}</td>
                    <td className="py-2.5 px-3 text-center text-[#315FEA]">{getColAvg('po2')}</td>
                    <td className="py-2.5 px-3 text-center text-[#315FEA]">{getColAvg('po3')}</td>
                    <td className="py-2.5 px-3 text-center text-[#315FEA]">{getColAvg('po4')}</td>
                    <td className="py-2.5 px-3 text-center font-bold text-[#16A34A]">
                      {(
                        (parseFloat(getColAvg('po1')) +
                          parseFloat(getColAvg('po2')) +
                          parseFloat(getColAvg('po3')) +
                          parseFloat(getColAvg('po4'))) /
                        4
                      ).toFixed(2)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Restrained Heatmap Legend */}
            <div className="mt-5 pt-4 border-t border-slate-100 dark:border-white/[0.06] flex flex-wrap items-center justify-between gap-3 text-xs">
              <span className="font-semibold text-slate-700 dark:text-slate-300">Correlation Scale:</span>
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-400 dark:text-slate-500 font-mono text-[10px] flex items-center justify-center">0</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">No Correlation</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/50 dark:border-blue-900/50 font-mono font-bold text-[10px] flex items-center justify-center">1</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">Slight (Low)</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded bg-indigo-100 dark:bg-indigo-950/70 text-indigo-700 dark:text-indigo-300 border border-indigo-200/60 dark:border-indigo-800/60 font-mono font-bold text-[10px] flex items-center justify-center">2</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">Moderate</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-5 h-5 rounded bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-mono font-bold text-[10px] flex items-center justify-center shadow-xs">3</span>
                  <span className="text-slate-600 dark:text-slate-400 text-[11px]">Substantial</span>
                </div>
              </div>
            </div>

            {/* Illustrative Disclaimer Note Required by Master Prompt */}
            <div className="mt-4 p-3 bg-slate-50 dark:bg-slate-800/40 rounded-xl border border-slate-200/80 dark:border-white/[0.08] flex items-start gap-2.5 text-xs text-slate-500 dark:text-slate-400">
              <Info className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
              <span>
                <strong>Illustrative sample mapping data:</strong> The displayed numbers represent illustrative mapping correlation levels for demonstration purposes, not verified VasuNiti institutional results.
              </span>
            </div>
          </div>

          {/* Right / Explanatory Detail Card (5 cols on lg) */}
          <div className="lg:col-span-5 bg-white dark:bg-[#0E1526] rounded-2xl border border-slate-200/90 dark:border-white/[0.08] p-6 shadow-sm">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-white/[0.06] mb-4">
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                Cell Detail & Justification
              </span>
              <span className="px-2.5 py-1 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold shadow-xs">
                {selectedCell.co} ↔ {poDetails[selectedCell.po]?.code}
              </span>
            </div>

            {/* Selected Course Outcome Info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-[#315FEA]">{selectedCell.co}:</span>
                <span className="text-xs font-semibold text-slate-900 dark:text-white">
                  {coDetails[selectedCell.co]?.title}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300 font-semibold ml-auto">
                  {coDetails[selectedCell.co]?.blooms}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 italic bg-white dark:bg-[#131C31] p-3 rounded-xl border border-slate-200/90 dark:border-white/[0.08]">
                "{coDetails[selectedCell.co]?.description}"
              </p>
            </div>

            {/* Selected Programme Outcome Info */}
            <div className="mb-4">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="text-xs font-bold text-slate-900 dark:text-slate-200">
                  {poDetails[selectedCell.po]?.code}:
                </span>
                <span className="text-xs font-bold text-slate-900 dark:text-white">
                  {poDetails[selectedCell.po]?.title}
                </span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 bg-white dark:bg-[#131C31] p-3 rounded-xl border border-slate-200/90 dark:border-white/[0.08]">
                {poDetails[selectedCell.po]?.graduateAttribute}
              </p>
            </div>

            {/* Correlation Weight & Qualitative Rationale */}
            <div className="p-4 bg-white dark:bg-[#131C31] rounded-2xl border border-slate-200/90 dark:border-white/[0.08] space-y-2 mb-5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">
                  Current Correlation Level:
                </span>
                <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                  Level {activeVal} — {activeVal === 3 ? 'Substantial (High)' : activeVal === 2 ? 'Moderate (Medium)' : activeVal === 1 ? 'Slight (Low)' : 'No Correlation'}
                </span>
              </div>
              <div>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Accreditation Mapping Justification:
                </span>
                <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                  {activeJustification}
                </p>
              </div>
            </div>

            {/* CTA in panel */}
            <button
              type="button"
              onClick={openDemoModal}
              className="w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-violet-600 hover:from-blue-500 hover:via-indigo-500 hover:to-violet-500 text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-md shadow-indigo-600/25 hover:shadow-indigo-600/40 hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Request Mapping Demo for Your Department</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
