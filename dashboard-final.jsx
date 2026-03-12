import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer
} from "recharts";

const personnelData = [
  { month: "Jan", statusQuo: 31500, linearTrend: 39500, arima: 29800 },
  { month: "Feb", statusQuo: 28000, linearTrend: 36200, arima: 27200 },
  { month: "Mar", statusQuo: 31500, linearTrend: 40700, arima: 29900 },
  { month: "Apr", statusQuo: 30300, linearTrend: 39700, arima: 28600 },
  { month: "May", statusQuo: 31500, linearTrend: 41600, arima: 29900 },
  { month: "Jun", statusQuo: 30300, linearTrend: 40800, arima: 28600 },
  { month: "Jul", statusQuo: 31500, linearTrend: 42800, arima: 29700 },
  { month: "Aug", statusQuo: 31500, linearTrend: 43300, arima: 29900 },
  { month: "Sep", statusQuo: 30300, linearTrend: 42400, arima: 28600 },
  { month: "Oct", statusQuo: 31500, linearTrend: 44700, arima: 29900 },
  { month: "Nov", statusQuo: 30300, linearTrend: 43300, arima: 28600 },
  { month: "Dec", statusQuo: 31500, linearTrend: 45300, arima: 29900 },
];

const correlationData = [
  { period: "Jan-Mar 24", territorial: 0.183, unmanned: 2900, manned: 7000 },
  { period: "Apr-Jun 24", territorial: 0.1845, unmanned: 2850, manned: 4900 },
  { period: "Jul-Sep 24", territorial: 0.1865, unmanned: 5100, manned: 4900 },
  { period: "Oct-Dec 24", territorial: 0.1890, unmanned: 5100, manned: 3600 },
  { period: "Jan-Mar 25", territorial: 0.1895, unmanned: 6100, manned: 4000 },
  { period: "Apr-Jun 25", territorial: 0.1907, unmanned: 6950, manned: 4350 },
  { period: "Jul-Sep 25", territorial: 0.1920, unmanned: 6600, manned: 4550 },
];

const StatCard = ({ label, value, sub, color }) => (
  <div style={{
    background: "#0a0f1e", border: `1px solid ${color}`,
    borderTop: `3px solid ${color}`, borderRadius: 6,
    padding: "12px 16px", flex: 1,
  }}>
    <div style={{ color: "#607090", fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase", marginBottom: 6 }}>{label}</div>
    <div style={{ color: "#ffffff", fontSize: 18, fontWeight: 700, fontFamily: "monospace" }}>{value}</div>
    <div style={{ color: color, fontSize: 10, marginTop: 4 }}>{sub}</div>
  </div>
);

const ChartCard = ({ title, subtitle, note, children }) => (
  <div style={{
    background: "#0d1525", border: "1px solid #1a3050",
    borderRadius: 8, padding: "16px",
  }}>
    <div style={{ color: "#ffffff", fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{title}</div>
    <div style={{ color: "#607090", fontSize: 10, marginBottom: 4 }}>{subtitle}</div>
    {note && (
      <div style={{
        display: "inline-block", background: "rgba(239,68,68,0.1)",
        border: "1px solid rgba(239,68,68,0.3)", borderRadius: 4,
        padding: "2px 10px", color: "#ef4444", fontSize: 9,
        letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12
      }}>{note}</div>
    )}
    {children}
  </div>
);

export default function App() {
  return (
    <div style={{
      background: "#080c14", minHeight: "100vh", padding: "20px",
      fontFamily: "'Courier New', monospace", color: "#c0cce8"
    }}>
      {/* Header */}
      <div style={{ marginBottom: 16, borderBottom: "1px solid #1a3050", paddingBottom: 12, display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
        <div>
          <div style={{ color: "#4a9eff", fontSize: 9, letterSpacing: "0.4em", marginBottom: 4 }}>
            NEXNODE | SECURITY & GEOPOLITICAL ANALYTICS
          </div>
          <div style={{ color: "#ffffff", fontSize: 18, fontWeight: 700 }}>
            Ukraine Conflict — Analytical Dashboard
          </div>
          <div style={{ color: "#607090", fontSize: 10, marginTop: 4 }}>
            Armor warfare dynamics · Personnel loss forecasting · 2024–2026
          </div>
        </div>
        <div style={{ color: "#3a5070", fontSize: 9, textAlign: "right" }}>
          Data: ACLED · VIINA<br />Author: Imdad Ullah
        </div>
      </div>

      {/* Stat Cards */}
      <div style={{ display: "flex", gap: 10, marginBottom: 16 }}>
        <StatCard label="ARIMA Forecast 2026" value="350,110" sub="Russian losses · Lower bound" color="#ef4444" />
        <StatCard label="Linear Trend 2026" value="499,671" sub="Russian losses · Upper bound" color="#3b82f6" />
        <StatCard label="Status Quo 2026" value="367,255" sub="Russian losses · Baseline" color="#9ca3af" />
        <StatCard label="Territorial Control" value="+0.9%" sub="Jan 2024 – Sep 2025" color="#22c55e" />
        <StatCard label="Unmanned Peak" value="7,450" sub="Apr–Jun 2025 events" color="#f59e0b" />
      </div>

      {/* Two charts stacked */}
      <div style={{ display: "grid", gridTemplateRows: "auto auto", gap: 14 }}>

        {/* Chart 1 - Personnel Loss - Full width */}
        <ChartCard
          title="2026 Russian Personnel Loss Scenarios"
          subtitle="Three forecasting models applied to projected Russian military casualties"
          note="Russian losses only"
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={personnelData} margin={{ top: 5, right: 20, left: 10, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a3050" />
              <XAxis dataKey="month" tick={{ fill: "#607090", fontSize: 10 }} axisLine={{ stroke: "#1a3050" }} />
              <YAxis tickFormatter={v => `${(v / 1000).toFixed(0)}k`} tick={{ fill: "#607090", fontSize: 10 }} axisLine={{ stroke: "#1a3050" }}
                label={{ value: "Monthly Personnel Losses", angle: -90, position: "insideLeft", fill: "#607090", fontSize: 9, dx: -10 }} />
              <Tooltip contentStyle={{ background: "#0a0f1e", border: "1px solid #1a3050", color: "#c0cce8", fontSize: 11 }}
                formatter={(v, n) => [v.toLocaleString(), n]} />
              <Legend wrapperStyle={{ fontSize: 10, color: "#c0cce8" }} />
              <Line type="monotone" dataKey="statusQuo" stroke="#9ca3af" strokeDasharray="5 5" strokeWidth={2} name={`Status Quo (Total: 367,255)`} dot={false} />
              <Line type="monotone" dataKey="linearTrend" stroke="#3b82f6" strokeWidth={2.5} name={`Linear Trend (Total: 499,671)`} dot={{ fill: "#3b82f6", r: 3 }} />
              <Line type="monotone" dataKey="arima" stroke="#ef4444" strokeWidth={2.5} name={`ARIMA (Total: 350,110)`} dot={{ fill: "#ef4444", r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

        {/* Chart 2 - Correlation - Full width */}
        <ChartCard
          title="Correlation: Territorial Control vs. Armor Violence Types"
          subtitle="Russian territorial gains tracked against manned and unmanned armor violence events · Jan 2024 – Sep 2025"
        >
          <ResponsiveContainer width="100%" height={260}>
            <LineChart data={correlationData} margin={{ top: 5, right: 60, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1a3050" />
              <XAxis dataKey="period" tick={{ fill: "#607090", fontSize: 10 }} axisLine={{ stroke: "#1a3050" }} />
              <YAxis yAxisId="left" domain={[0.182, 0.194]} tickFormatter={v => v.toFixed(3)}
                tick={{ fill: "#22c55e", fontSize: 10 }} axisLine={{ stroke: "#22c55e" }}
                label={{ value: "Territorial Control (%)", angle: -90, position: "insideLeft", fill: "#22c55e", fontSize: 9, dx: -10 }} />
              <YAxis yAxisId="right" orientation="right" domain={[2500, 7500]}
                tick={{ fill: "#ef4444", fontSize: 10 }} axisLine={{ stroke: "#ef4444" }}
                label={{ value: "Violence Events", angle: 90, position: "insideRight", fill: "#ef4444", fontSize: 9, dx: 10 }} />
              <Tooltip contentStyle={{ background: "#0a0f1e", border: "1px solid #1a3050", color: "#c0cce8", fontSize: 11 }} />
              <Legend wrapperStyle={{ fontSize: 10, color: "#c0cce8" }} />
              <Line yAxisId="left" type="monotone" dataKey="territorial" stroke="#22c55e" strokeWidth={2.5} name="Territorial Control (%)" dot={{ fill: "#22c55e", r: 4 }} />
              <Line yAxisId="right" type="monotone" dataKey="unmanned" stroke="#ef4444" strokeDasharray="6 3" strokeWidth={2} name="Unmanned Violence (Events)" dot={{ fill: "#ef4444", r: 4 }} />
              <Line yAxisId="right" type="monotone" dataKey="manned" stroke="#4a9eff" strokeDasharray="2 4" strokeWidth={2} name="Manned Violence (Events)" dot={{ fill: "#4a9eff", r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>

      </div>

      {/* Footer */}
      <div style={{ marginTop: 12, color: "#3a5070", fontSize: 9, textAlign: "right", borderTop: "1px solid #1a3050", paddingTop: 10 }}>
        Author: Imdad Ullah · Data Sources: ACLED, VIINA (github.com/zhukovyuri/VIINA) · Work in progress — do not disseminate
      </div>
    </div>
  );
}
