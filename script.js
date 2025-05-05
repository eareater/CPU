document.addEventListener('DOMContentLoaded', function() {
    // CPU Data - Intel
    const intelCPUs = [
        {
            generation: "First Generation (1971-1978)",
            vendor: "intel",
            years: "1971-1978",
            processors: "Intel 4004, Intel 8008, Intel 8080",
            microarchitecture: "Earliest microprocessors, basic architectures",
            process: "10 µm (4004) and early PMOS technology",
            features: [
                "Integer arithmetic",
                "Basic control flow",
                "Limited instruction sets"
            ],
            market: "Calculators, early microcomputers, industrial control",
            socket: "Various early sockets",
            impact: "Revolutionized electronics, made personal computing possible"
        },
        {
            generation: "8086 and 8088 (1978-1982)",
            vendor: "intel",
            years: "1978-1982",
            processors: "Intel 8086, Intel 8088",
            microarchitecture: "16-bit architecture (8088 had 8-bit external bus)",
            process: "HMOS technology (around 3 µm)",
            features: [
                "16-bit registers",
                "Powerful instruction set",
                "Segment registers"
            ],
            market: "Early personal computers",
            socket: "Various early sockets",
            impact: "Laid the foundation for the x86 architecture"
        },
        {
            generation: "80286 (1982)",
            vendor: "intel",
            years: "1982-1985",
            processors: "Intel 80286",
            microarchitecture: "Enhanced 16-bit, 'protected mode'",
            process: "HMOS III (around 1.5 µm)",
            features: [
                "Protected mode for >1MB memory",
                "Improved performance",
                "Advanced addressing capabilities"
            ],
            market: "Advanced personal computers (e.g., IBM PC AT)",
            socket: "PGA socket",
            impact: "Enabled sophisticated software, larger memory usage"
        },
        {
            generation: "80386 (1985)",
            vendor: "intel",
            years: "1985-1989",
            processors: "Intel 80386DX, 80386SX",
            microarchitecture: "First 32-bit x86, linear addressing",
            process: "CHMOS III (around 1 µm)",
            features: [
                "32-bit registers",
                "Virtual 8086 mode",
                "True multitasking capabilities"
            ],
            market: "High-end PCs, workstations",
            socket: "PGA socket",
            impact: "Paved the way for modern OS and applications"
        },
        {
            generation: "80486 (1989)",
            vendor: "intel",
            years: "1989-1993",
            processors: "Intel 80486DX, 80486SX, 80486DX2, 80486DX4",
            microarchitecture: "Enhanced 32-bit with integrated components",
            process: "CHMOS IV (around 0.8 µm)",
            features: [
                "Integrated FPU (except 486SX)",
                "L1 cache",
                "Pipelined execution"
            ],
            market: "Mainstream PCs",
            socket: "Socket 1, 2, 3",
            impact: "Boosted performance for general and math tasks"
        },
        {
            generation: "Pentium (1993)",
            vendor: "intel",
            years: "1993-1997",
            processors: "Pentium, Pentium MMX",
            microarchitecture: "P5, superscalar architecture",
            process: "BiCMOS (0.8 µm to 0.35 µm)",
            features: [
                "Superscalar execution",
                "Branch prediction",
                "Separate caches",
                "MMX instructions (Pentium MMX)"
            ],
            market: "Mainstream and high-end PCs",
            socket: "Socket 4, 5, 7",
            impact: "Significant performance jump, multimedia capabilities"
        },
        {
            generation: "Pentium Pro (1995)",
            vendor: "intel",
            years: "1995-1998",
            processors: "Pentium Pro",
            microarchitecture: "P6, out-of-order execution",
            process: "0.5 µm to 0.35 µm",
            features: [
                "Out-of-order execution",
                "Speculative execution",
                "Separate L2 cache"
            ],
            market: "Servers, workstations, high-end desktops",
            socket: "Socket 8",
            impact: "Major architectural advancement, server-focused"
        },
        {
            generation: "Pentium II (1997)",
            vendor: "intel",
            years: "1997-1999",
            processors: "Pentium II, Pentium II Xeon",
            microarchitecture: "P6 (improved)",
            process: "0.35 µm to 0.25 µm",
            features: [
                "MMX instructions",
                "On-package L2 cache",
                "SEC cartridge packaging"
            ],
            market: "Desktop PCs, entry-level servers",
            socket: "Slot 1, Slot 2 (Xeon)",
            impact: "Mainstream adoption of P6 architecture"
        },
        {
            generation: "Pentium III (1999)",
            vendor: "intel",
            years: "1999-2003",
            processors: "Pentium III, Pentium III Xeon",
            microarchitecture: "P6 (further improved)",
            process: "0.25 µm to 0.13 µm",
            features: [
                "SSE instructions",
                "Advanced cache implementations",
                "Transition to flip-chip package"
            ],
            market: "Desktop PCs, servers, workstations",
            socket: "Slot 1, Socket 370",
            impact: "Enhanced multimedia capabilities, improved efficiency"
        },
        {
            generation: "NetBurst (Pentium 4, Pentium D)",
            vendor: "intel",
            years: "2000-2006",
            processors: "Pentium 4, Pentium D, Pentium Extreme Edition",
            microarchitecture: "NetBurst, focused on high clock speeds",
            process: "0.18 µm to 65 nm",
            features: [
                "High clock speeds",
                "Hyper-Threading (some models)",
                "SSE2, SSE3",
                "Dual-core (Pentium D)"
            ],
            market: "Desktop PCs",
            socket: "Socket 423, 478, 775",
            impact: "High clock speeds, but power inefficiency, lower IPC"
        },
        {
            generation: "Pentium M (2003)",
            vendor: "intel",
            years: "2003-2008",
            processors: "Pentium M, Core, Core 2",
            microarchitecture: "Derived from P6, optimized for mobile",
            process: "130 nm to 90 nm",
            features: [
                "Enhanced power management",
                "Micro-ops fusion",
                "SSE2",
                "Efficient execution"
            ],
            market: "Laptops",
            socket: "Socket 479, various BGA",
            impact: "Excellent performance per watt for mobile"
        },
        {
            generation: "Core 1st Gen (Nehalem)",
            vendor: "intel",
            years: "2008-2010",
            processors: "Core i7-9xx, i5-7xx, i3-5xx",
            microarchitecture: "Nehalem",
            process: "45 nm",
            features: [
                "Integrated memory controller (IMC)",
                "QuickPath Interconnect (QPI) (high-end)",
                "Hyper-Threading",
                "Turbo Boost"
            ],
            market: "Desktop and laptop PCs",
            socket: "LGA 1366 (high-end), LGA 1156 (mainstream)",
            impact: "Improved performance and efficiency, return to focus on IPC"
        },
        {
            generation: "Core 2nd Gen (Sandy Bridge)",
            vendor: "intel",
            years: "2011",
            processors: "Core i7-2xxx, i5-2xxx, i3-2xxx",
            microarchitecture: "Sandy Bridge",
            process: "32 nm",
            features: [
                "Enhanced IMC",
                "Improved integrated graphics",
                "AVX instructions",
                "Turbo Boost 2.0"
            ],
            market: "Mainstream desktop and laptop PCs",
            socket: "LGA 1155",
            impact: "Significant boost in integrated graphics performance, AVX instruction set"
        },
        {
            generation: "Core 3rd Gen (Ivy Bridge)",
            vendor: "intel",
            years: "2012",
            processors: "Core i7-3xxx, i5-3xxx, i3-3xxx",
            microarchitecture: "Ivy Bridge",
            process: "22 nm, Tri-Gate transistors",
            features: [
                "Improved integrated graphics",
                "PCIe 3.0",
                "3D transistor design"
            ],
            market: "Mainstream desktop and laptop PCs",
            socket: "LGA 1155",
            impact: "First 22 nm processors, introduction of Tri-Gate transistors for improved power efficiency"
        },
        {
            generation: "Core 4th Gen (Haswell)",
            vendor: "intel",
            years: "2013",
            processors: "Core i7-4xxx, i5-4xxx, i3-4xxx",
            microarchitecture: "Haswell",
            process: "22 nm",
            features: [
                "Improved IPC",
                "Enhanced integrated graphics",
                "AVX2 instructions",
                "Improved power efficiency"
            ],
            market: "Mainstream desktop and laptop PCs",
            socket: "LGA 1150",
            impact: "Focus on power efficiency and further improvement to integrated graphics"
        },
        {
            generation: "Core 5th Gen (Broadwell)",
            vendor: "intel",
            years: "2014-2015",
            processors: "Core i7-5xxx, i5-5xxx, i3-5xxx",
            microarchitecture: "Broadwell",
            process: "14 nm",
            features: [
                "Power efficiency improvements",
                "Refined integrated graphics",
                "eDRAM (some SKUs)"
            ],
            market: "Ultraportable laptops, niche desktops",
            socket: "LGA 1150 (desktop), BGA (mobile)",
            impact: "Die shrink to 14 nm, focus on mobile power efficiency"
        },
        {
            generation: "Core 6th Gen (Skylake)",
            vendor: "intel",
            years: "2015-2016",
            processors: "Core i7-6xxx, i5-6xxx, i3-6xxx",
            microarchitecture: "Skylake",
            process: "14 nm",
            features: [
                "Improved IPC",
                "Enhanced integrated graphics",
                "DDR4 support"
            ],
            market: "Mainstream desktop and laptop PCs",
            socket: "LGA 1151",
            impact: "Performance and feature improvements, wider adoption of DDR4"
        },
        {
            generation: "Core 7th Gen (Kaby Lake)",
            vendor: "intel",
            years: "2016-2017",
            processors: "Core i7-7xxx, i5-7xxx, i3-7xxx",
            microarchitecture: "Kaby Lake",
            process: "14 nm+",
            features: [
                "Minor IPC improvements",
                "Improved video decoding capabilities",
                "Higher clock speeds"
            ],
            market: "Mainstream desktop and laptop PCs",
            socket: "LGA 1151",
            impact: "Refined Skylake architecture, focus on multimedia performance"
        },
        {
            generation: "Core 8th Gen (Coffee Lake)",
            vendor: "intel",
            years: "2017-2018",
            processors: "Core i7-8xxx, i5-8xxx, i3-8xxx",
            microarchitecture: "Coffee Lake",
            process: "14 nm++",
            features: [
                "Increased core counts (6-core i5, 4-core i3)",
                "Higher clock speeds",
                "Improved multi-threaded performance"
            ],
            market: "Mainstream desktop and laptop PCs",
            socket: "LGA 1151",
            impact: "Significant increase in core counts, boosting multi-threaded performance"
        },
        {
            generation: "Core 9th Gen (Coffee Lake Refresh)",
            vendor: "intel",
            years: "2018-2019",
            processors: "Core i9-9xxx, i7-9xxx, i5-9xxx, i3-9xxx",
            microarchitecture: "Coffee Lake Refresh",
            process: "14 nm++",
            features: [
                "Increased core counts (i9)",
                "Higher clock speeds",
                "Solder TIM"
            ],
            market: "Mainstream and high-end desktop PCs",
            socket: "LGA 1151",
            impact: "Continued increase in core counts with Core i9 in the mainstream"
        },
        {
            generation: "Core 10th Gen (Comet Lake, Ice Lake)",
            vendor: "intel",
            years: "2019-2020",
            processors: "Core i9/i7/i5/i3-10xxx (Comet Lake), i7/i5/i3-10xxG (Ice Lake)",
            microarchitecture: "Comet Lake, Ice Lake",
            process: "14 nm+++ (Comet Lake), 10 nm (Ice Lake)",
            features: [
                "Increased core counts (Comet Lake)",
                "New 'Sunny Cove' cores (Ice Lake)",
                "Significantly improved integrated graphics (Ice Lake)"
            ],
            market: "Desktop and laptop PCs",
            socket: "LGA 1200 (Comet Lake), BGA (Ice Lake)",
            impact: "Introduction of 10 nm process for mobile CPUs and increased core counts for desktop"
        },
        {
            generation: "Core 11th Gen (Rocket Lake, Tiger Lake)",
            vendor: "intel",
            years: "2020-2021",
            processors: "Core i9/i7/i5/i3-11xxx (Rocket Lake), i9/i7/i5/i3-11xxx (Tiger Lake)",
            microarchitecture: "Tiger Lake, Rocket Lake",
            process: "14 nm++++ (Rocket Lake), 10 nm SuperFin (Tiger Lake)",
            features: [
                "Improved IPC (Rocket Lake)",
                "New 'Willow Cove' cores (Tiger Lake)",
                "Intel Xe Graphics (Tiger Lake)",
                "PCIe 4.0 support"
            ],
            market: "Desktop and laptop PCs",
            socket: "LGA 1200 (Rocket Lake), BGA (Tiger Lake)",
            impact: "IPC improvements for desktop and significant graphics upgrade for mobile"
        },
        {
            generation: "Core 12th Gen (Alder Lake)",
            vendor: "intel",
            years: "2021-2022",
            processors: "Core i9/i7/i5/i3-12xxx",
            microarchitecture: "Alder Lake",
            process: "Intel 7 process",
            features: [
                "Hybrid architecture (P-cores and E-cores)",
                "PCIe 5.0 support",
                "DDR5 support",
                "Thread Director"
            ],
            market: "Desktop and laptop PCs",
            socket: "LGA 1700",
            impact: "Introduced a new hybrid architecture combining different core types"
        },
        {
            generation: "Core 13th Gen (Raptor Lake)",
            vendor: "intel",
            years: "2022-2023",
            processors: "Core i9/i7/i5/i3-13xxx",
            microarchitecture: "Raptor Lake",
            process: "Intel 7 process (optimized)",
            features: [
                "Refined hybrid architecture",
                "Increased E-cores",
                "Higher clock speeds",
                "Enhanced cache architecture"
            ],
            market: "Desktop and laptop PCs",
            socket: "LGA 1700",
            impact: "Continued refinement of hybrid architecture with increased E-core counts"
        },
        {
            generation: "Core 14th Gen (Raptor Lake Refresh)",
            vendor: "intel",
            years: "2023-Present",
            processors: "Core i9/i7/i5/i3-14xxx",
            microarchitecture: "Raptor Lake Refresh",
            process: "Intel 7 process (optimized)",
            features: [
                "Increased core counts in some models",
                "Higher clock speeds",
                "Improved power efficiency"
            ],
            market: "Desktop PCs",
            socket: "LGA 1700",
            impact: "Refresh of Raptor Lake, providing further performance improvements"
        },
        {
            generation: "Core Ultra Series (Meteor Lake)",
            vendor: "intel",
            years: "2023-Present",
            processors: "Core Ultra 9/7/5",
            microarchitecture: "Meteor Lake",
            process: "Intel 4 (CPU), TSMC N5/N6 (GPU, SoC)",
            features: [
                "Tile-based modular design",
                "Integrated Intel Arc Graphics",
                "Dedicated NPU for AI acceleration",
                "Improved power efficiency"
            ],
            market: "Ultra-thin and mainstream laptops",
            socket: "BGA (soldered)",
            impact: "New tile-based architecture focusing on AI acceleration and power efficiency"
        }
    ];

    // CPU Data - AMD
    const amdCPUs = [
        {
            generation: "2nd Source Era (1979-1991)",
            vendor: "amd",
            years: "1979-1991",
            processors: "AMD-licensed versions of Intel 8086, 8088, 80286, 80386",
            microarchitecture: "Intel-compatible designs",
            process: "Various early processes",
            features: [
                "Intel-compatible processors",
                "Often higher clock speeds than Intel equivalents",
                "Compatible with Intel platforms"
            ],
            market: "Desktop PCs",
            socket: "Various early sockets",
            impact: "Established AMD as Intel's main competitor in the x86 market"
        },
        {
            generation: "Am386/Am486 Series (1991-1995)",
            vendor: "amd",
            years: "1991-1995",
            processors: "Am386, Am486",
            microarchitecture: "Enhanced versions of Intel's x86",
            process: "0.8 µm to 0.5 µm",
            features: [
                "Clock-doubled designs",
                "Enhanced performance",
                "Lower power options"
            ],
            market: "Desktop PCs",
            socket: "Socket 1, 2, 3, 7",
            impact: "AMD began differentiating from Intel's designs"
        },
        {
            generation: "K5 Architecture (1996)",
            vendor: "amd",
            years: "1996-1997",
            processors: "AMD K5",
            microarchitecture: "AMD's first original x86, superscalar",
            process: "0.35 µm",
            features: [
                "Superscalar design",
                "Branch prediction",
                "RISC-like internal architecture"
            ],
            market: "Desktop PCs",
            socket: "Socket 7",
            impact: "AMD's first in-house designed x86 architecture"
        },
        {
            generation: "K6 Architecture (1997-2001)",
            vendor: "amd",
            years: "1997-2001",
            processors: "AMD K6, K6-2, K6-III",
            microarchitecture: "Improved superscalar design",
            process: "0.35 µm to 0.18 µm",
            features: [
                "Superscalar execution",
                "MMX instructions",
                "3DNow! (K6-2)",
                "On-die L2 cache (K6-III)"
            ],
            market: "Desktop PCs",
            socket: "Socket 7/Super Socket 7",
            impact: "Strong competition to Intel Pentium/Pentium II at lower price points"
        },
        {
            generation: "K7 Architecture (Athlon, Duron)",
            vendor: "amd",
            years: "1999-2005",
            processors: "Athlon (Slot A), Athlon (Socket A), Athlon XP, Athlon MP, Duron, Sempron (early)",
            microarchitecture: "K7, efficient pipeline design",
            process: "0.25 µm to 0.13 µm",
            features: [
                "Strong floating-point performance",
                "High clock speeds",
                "EV6 bus (Athlon)",
                "SSE instructions (Athlon XP)"
            ],
            market: "Desktop PCs, servers (MP), budget (Duron)",
            socket: "Slot A, Socket A",
            impact: "Competitive performance vs Intel Pentium III/4, performance leadership"
        },
        {
            generation: "K8 Architecture (Athlon 64, Opteron)",
            vendor: "amd",
            years: "2003-2011",
            processors: "Athlon 64, Athlon 64 FX, Athlon 64 X2, Opteron, Sempron",
            microarchitecture: "K8, 64-bit (x86-64)",
            process: "0.13 µm to 65 nm",
            features: [
                "x86-64 instruction set",
                "Integrated memory controller",
                "HyperTransport interconnect",
                "Dual-core designs (X2)"
            ],
            market: "Desktop PCs, servers (Opteron), budget (Sempron)",
            socket: "Socket 754, 939, AM2, Socket F (Opteron)",
            impact: "Led 64-bit transition, performance leadership in early-mid 2000s"
        },
        {
            generation: "K10 Architecture (Phenom)",
            vendor: "amd",
            years: "2007-2011",
            processors: "Phenom, Phenom II, Athlon X2 (later), Sempron",
            microarchitecture: "K10, native multi-core",
            process: "65 nm and 45 nm",
            features: [
                "Native multi-core design",
                "HyperTransport 3.0",
                "Larger L3 cache (Phenom II)",
                "Improved memory controller"
            ],
            market: "Desktop PCs",
            socket: "Socket AM2+, AM3",
            impact: "Enhanced multi-core performance, competitive with Intel Core 2"
        },
        {
            generation: "Bulldozer Architecture (FX Series)",
            vendor: "amd",
            years: "2011-2017",
            processors: "FX-4xxx, FX-6xxx, FX-8xxx, Opteron (server variants)",
            microarchitecture: "Bulldozer, Piledriver, Steamroller, Excavator",
            process: "32 nm to 28 nm",
            features: [
                "Modular design",
                "High core counts",
                "Shared resources between cores",
                "Turbo Core technology"
            ],
            market: "Desktop PCs, entry-level servers",
            socket: "Socket AM3+, FM2+",
            impact: "High multi-threading but lower IPC performance compared to Intel"
        },
        {
            generation: "Jaguar/Bobcat Architecture (2011-Present)",
            vendor: "amd",
            years: "2011-Present",
            processors: "AMD E-series, C-series, A-series (low-power APUs)",
            microarchitecture: "Bobcat, Jaguar",
            process: "40 nm to 28 nm",
            features: [
                "Integrated GPU",
                "Low power consumption",
                "Low-cost design",
                "In-order execution"
            ],
            market: "Netbooks, laptops, tablets, embedded systems",
            socket: "Various BGA",
            impact: "Provided AMD presence in low-power, embedded markets"
        },
        {
            generation: "Zen Architecture (Ryzen 1000)",
            vendor: "amd",
            years: "2017-2018",
            processors: "Ryzen 3/5/7 1000 Series, Threadripper 1000, Epyc 7001",
            microarchitecture: "Zen",
            process: "14 nm",
            features: [
                "High IPC",
                "SMT (Simultaneous Multithreading)",
                "Multi-core scalability",
                "Infinity Fabric interconnect"
            ],
            market: "Desktop PCs, HEDT, servers",
            socket: "Socket AM4, TR4, SP3",
            impact: "Returned AMD to competitive performance against Intel"
        },
        {
            generation: "Zen+ Architecture (Ryzen 2000)",
            vendor: "amd",
            years: "2018-2019",
            processors: "Ryzen 3/5/7 2000 Series, Threadripper 2000",
            microarchitecture: "Zen+",
            process: "12 nm",
            features: [
                "Improved clock speeds",
                "Better memory latency",
                "Precision Boost 2",
                "XFR2 (Extended Frequency Range)"
            ],
            market: "Desktop PCs, HEDT",
            socket: "Socket AM4, TR4",
            impact: "Refined Zen architecture with better performance and efficiency"
        },
        {
            generation: "Zen 2 Architecture (Ryzen 3000)",
            vendor: "amd",
            years: "2019-2020",
            processors: "Ryzen 3/5/7/9 3000 Series, Threadripper 3000, Epyc 7002",
            microarchitecture: "Zen 2",
            process: "7 nm (CPU chiplets), 12 nm (I/O die)",
            features: [
                "Chiplet design",
                "Doubled L3 cache",
                "PCIe 4.0 support",
                "Significant IPC improvements"
            ],
            market: "Desktop PCs, HEDT, servers",
            socket: "Socket AM4, TRX40, SP3",
            impact: "Major performance leap, leading process technology"
        },
        {
            generation: "Zen 3 Architecture (Ryzen 5000)",
            vendor: "amd",
            years: "2020-2021",
            processors: "Ryzen 5000 Series, Threadripper 5000, Epyc 7003",
            microarchitecture: "Zen 3",
            process: "7 nm (enhanced)",
            features: [
                "Unified 8-core CCX",
                "Substantial IPC improvements",
                "Improved cache architecture",
                "Refined power management"
            ],
            market: "Desktop PCs, HEDT, servers",
            socket: "Socket AM4, Socket SP3",
            impact: "Gaming performance leadership, strong single-thread performance"
        },
        {
            generation: "Zen 3+ Architecture (Ryzen 6000)",
            vendor: "amd",
            years: "2022",
            processors: "Ryzen 6000 Series Mobile",
            microarchitecture: "Zen 3+",
            process: "6 nm",
            features: [
                "Improved mobile efficiency",
                "RDNA 2 integrated graphics",
                "Power management enhancements",
                "DDR5 support (mobile)"
            ],
            market: "High-performance laptops",
            socket: "BGA",
            impact: "Enhanced mobile performance and efficiency"
        },
        {
            generation: "Zen 4 Architecture (Ryzen 7000)",
            vendor: "amd",
            years: "2022-Present",
            processors: "Ryzen 7000 Series, Epyc 9004 Series",
            microarchitecture: "Zen 4",
            process: "5 nm (CPU chiplets), 6 nm (I/O die)",
            features: [
                "Increased IPC",
                "DDR5 support",
                "PCIe 5.0",
                "Integrated graphics (desktop)",
                "AVX-512 support"
            ],
            market: "Desktop PCs, servers",
            socket: "Socket AM5, Socket SP5",
            impact: "Platform modernization with new socket and memory support"
        },
        {
            generation: "Zen 4c Architecture (Epyc 8004)",
            vendor: "amd",
            years: "2023-Present",
            processors: "Epyc 8004 Series",
            microarchitecture: "Zen 4c (density-optimized)",
            process: "5 nm",
            features: [
                "High core density",
                "Optimized power efficiency",
                "Cloud-optimized design",
                "Max 128 cores per socket"
            ],
            market: "Cloud computing, data centers",
            socket: "Socket SP6",
            impact: "High-efficiency server processors for cloud providers"
        },
        {
            generation: "Zen 4 with RDNA 3 (Ryzen 7040/8040)",
            vendor: "amd",
            years: "2023-Present",
            processors: "Ryzen 7040 Series, Ryzen 8040 Series",
            microarchitecture: "Zen 4 with RDNA 3 Graphics",
            process: "4 nm",
            features: [
                "High performance CPU",
                "RDNA 3 integrated GPU",
                "Ray Tracing support",
                "Dedicated AI acceleration (NPU)"
            ],
            market: "High-Performance Laptops",
            socket: "BGA",
            impact: "AI acceleration and high-performance integrated graphics"
        }
    ];

    // Combine both arrays
    const allCPUs = [...intelCPUs, ...amdCPUs];

    // Function to render CPU cards
    function renderCPUs(cpus) {
        const container = document.getElementById('cpuContainer');
        container.innerHTML = '';

        cpus.forEach(cpu => {
            const card = document.createElement('div');
            card.className = `cpu-card ${cpu.vendor}`;
            
            // Create vendor badge text
            const vendorText = cpu.vendor === 'intel' ? 'Intel' : 'AMD';
            const vendorBadgeClass = cpu.vendor === 'intel' ? 'intel-badge' : 'amd-badge';

            card.innerHTML = `
                <div class="card-header">
                    <span class="vendor-badge ${vendorBadgeClass}">${vendorText}</span>
                    <h2 class="generation">${cpu.generation}</h2>
                    <p class="years">${cpu.years}</p>
                </div>
                <div class="card-body">
                    <div class="cpu-detail">
                        <p class="detail-title">Key Processors:</p>
                        <p class="detail-content">${cpu.processors}</p>
                    </div>
                    <div class="cpu-detail">
                        <p class="detail-title">Microarchitecture:</p>
                        <p class="detail-content">${cpu.microarchitecture}</p>
                    </div>
                    <div class="cpu-detail">
                        <p class="detail-title">Manufacturing Process:</p>
                        <p class="detail-content">${cpu.process}</p>
                    </div>
                    <div class="cpu-detail">
                        <p class="detail-title">Key Features:</p>
                        <ul class="detail-content">
                            ${cpu.features.map(feature => `<li>${feature}</li>`).join('')}
                        </ul>
                    </div>
                    <div class="cpu-detail">
                        <p class="detail-title">Target Market:</p>
                        <p class="detail-content">${cpu.market}</p>
                    </div>
                    <div class="cpu-detail">
                        <p class="detail-title">Socket Type:</p>
                        <p class="detail-content">${cpu.socket}</p>
                    </div>
                    <div class="cpu-detail">
                        <p class="detail-title">Impact:</p>
                        <p class="detail-content">${cpu.impact}</p>
                    </div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // Initialize with all CPUs
    renderCPUs(allCPUs);

    // Set up filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            let filteredCPUs;
            
            if (filter === 'all') {
                filteredCPUs = allCPUs;
            } else if (filter === 'intel') {
                filteredCPUs = intelCPUs;
            } else if (filter === 'amd') {
                filteredCPUs = amdCPUs;
            }
            
            renderCPUs(filteredCPUs);
        });
    });
});
