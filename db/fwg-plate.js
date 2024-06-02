export default [
  {
    name: "P1: Continuous decrease in the main engine freshwater expansion tank.",
    reasons: [
      {
        name: "P1R1: Leakage in the heat exchanger.",
        solutions: [
          "P1S1: Perform a pressure test on the heat exchanger (not exceeding 6 bar) by opening the outer casing. Replace the damaged plate(s) with the same spare part if available. Check the plate gaskets and replace any leaking ones.",
        ],
      },
    ],
  },
  {
    name: "P2: Excess seawater in the heat exchanger cannot be drawn.",
    reasons: [
      {
        name: "P2R1: Low ejector pump pressure.",
        solutions: ['P2S1: See "Low seawater (ejector) pump pressure/flow".'],
      },
      {
        name: "P2R2: Foreign substances in the ejector nozzle.",
        solutions: [
          "P2S2: Clean the ejector completely and replace the nozzle if there is wear or damage.",
        ],
      },
      {
        name: "P2R3: Excessive back pressure at the ejector outlet.",
        solutions: [
          "P2S3: Check the sea outlet circuit and the overboard valve.",
        ],
      },
      {
        name: "P2R4: Incorrect size of the orifice in the feed water circuit.",
        solutions: ["P2S4: Check and replace if necessary."],
      },
      {
        name: "P2R5: The non-return valve before the seawater ejector is not working.",
        solutions: [
          "P2S5: Check the valve flap and perform complete maintenance of the valve.",
        ],
      },
    ],
  },
  {
    name: "P3: Salinity ratio is too high (e.g., continuously above 10 ppm).",
    reasons: [
      {
        name: "P3R1: Excess seawater in the heat exchanger cannot be drawn.",
        solutions: [
          'P3S1: See "Excess seawater in the heat exchanger cannot be drawn."',
        ],
      },
      {
        name: "P3R2: Dirty or damaged electrode.",
        solutions: [
          "P3S2: Check if the electrode is damaged or cracked, and if it is properly seated in its slot. Replace if damaged, clean and properly seat if not damaged.",
        ],
      },
      {
        name: "P3R3: Front cover gasket is damaged or not seated properly.",
        solutions: ["P3S3: Replace the gasket."],
      },
      {
        name: "P3R4: Demister is not seated properly.",
        solutions: ["P3S4: Seat the demister correctly."],
      },
      {
        name: "P3R5: Leakage in the condenser.",
        solutions: [
          "P3S5: Perform a pressure test on the condenser (not exceeding 6 bar) by opening the outer casing. Replace the damaged plate(s) with the same spare part if available. Check the plate gaskets and replace any leaking ones.",
        ],
      },
    ],
  },
  {
    name: "P4: Freshwater sight glass (level bottle) is completely full.",
    reasons: [
      {
        name: "P4R1: Leakage in the distillate pump suction circuit.",
        solutions: [
          "P4S1: Check the suction circuit, especially the union and other connection elements.",
        ],
      },
      {
        name: "P4R2: High back pressure at the distillate pump outlet.",
        solutions: [
          "P4S2: Reduce the back pressure by slightly opening the outlet valve.",
        ],
      },
      {
        name: "P4R3: Damaged mechanical seal in the distillate pump shaft gland.",
        solutions: ["P4S3: Replace the mechanical seal."],
      },
      {
        name: "P4R4: Damaged or worn impeller and wear ring in the distillate pump.",
        solutions: [
          "P4S4: Maintain the pump and replace worn or damaged elements.",
        ],
      },
      {
        name: "P4R5: Incorrect rotation direction of the distillate pump.",
        solutions: ["P4S5: Change the phases."],
      },
      {
        name: "P4R6: Freshwater tank valve is closed.",
        solutions: [
          "P4S6: Open the valve and check other valves if available.",
        ],
      },
      {
        name: "P4R7: Filter at the flow meter inlet is dirty.",
        solutions: ["P4S7: Clean the filter."],
      },
    ],
  },
  {
    name: "P5: Low seawater (ejector) pump pressure/flow.",
    reasons: [
      {
        name: "P5R1: Faulty pressure gauge.",
        solutions: ["P5S1: Replace the pressure gauge."],
      },
      {
        name: "P5R2: Damaged or worn impeller and wear ring in the seawater pump.",
        solutions: [
          "P5S2: Maintain the pump and replace worn or damaged elements.",
        ],
      },
      {
        name: "P5R3: Clogged filter in the pump suction line.",
        solutions: ["P5S3: Clean the filter."],
      },
      {
        name: "P5R4: Closed, partially closed, or damaged valve in the pump suction or discharge circuit.",
        solutions: ["P5S4: Check all valves and maintain them if necessary."],
      },
      {
        name: "P5R5: Leakage in the pump suction line.",
        solutions: ["P5S5: Repair or replace the leaking circuit."],
      },
      {
        name: "P5R6: Clogged condenser.",
        solutions: ["P5S6: Disassemble and clean the plates."],
      },
      {
        name: "P5R7: Incorrect rotation direction of the pump.",
        solutions: ["P5S7: Change the phases."],
      },
    ],
  },
  {
    name: "P6: High evaporation temperature (above 45\u00b0C), therefore low vacuum.",
    reasons: [
      {
        name: "P6R1: Temperature gauge (thermometer) is showing incorrectly.",
        solutions: [
          "P6S1: Check and replace the temperature gauge if necessary.",
        ],
      },
      {
        name: "P6R2: Air in the seawater cooling circuit of the condenser.",
        solutions: ["P6S2: Vent the air from the condenser."],
      },
      {
        name: "P6R3: Seawater going to the condenser is too hot or too little.",
        solutions: [
          "P6S3.1: Provide colder seawater to the condenser.",
          "P6S3.2: Provide more seawater to the condenser.",
        ],
      },
      {
        name: "P6R4: Condenser tubes are clogged.",
        solutions: ["P6S4: Clean the condenser tubes."],
      },
      {
        name: "P6R5: Filter in the seawater pump suction line is clogged.",
        solutions: ["P6S5: Clean the filter."],
      },
      {
        name: "P6R6: Closed, partially closed, or damaged valve in the suction or discharge circuit of the seawater pump.",
        solutions: ["P6S6: Check all valves and maintain them if necessary."],
      },
      {
        name: "P6R7: Leakage in the suction line of the seawater pump.",
        solutions: ["P6S7: Repair or replace the leaking circuit."],
      },
      {
        name: "P6R8: Damaged or worn impeller and wear ring in the seawater pump.",
        solutions: [
          "P6S8: Maintain the pump and replace worn or damaged elements.",
        ],
      },
      {
        name: "P6R9: Incorrect rotation direction of the seawater pump.",
        solutions: ["P6S9: Change the phases."],
      },
      {
        name: "P6R10: Foreign substances in the ejector nozzle.",
        solutions: [
          "P6S10: Clean the ejector completely and replace the nozzle if there is wear or damage.",
        ],
      },
      {
        name: "P6R11: Excessive back pressure at the ejector outlet.",
        solutions: [
          "P6S11: Check the sea outlet circuit and the overboard outlet valve.",
        ],
      },
      {
        name: "P6R12: Jacket water quantity is too high.",
        solutions: [
          "P6S12: Slightly reduce the amount of main engine freshwater supplied to the heat exchanger by opening the bypass valve.",
        ],
      },
      {
        name: "P6R13: Main engine jacket water is too hot.",
        solutions: ["P6S13: Reduce the jacket water temperature slightly."],
      },
      {
        name: "P6R14: Leaks in the evaporator (low vacuum).",
        solutions: [
          "P6S14: Test the evaporator completely and eliminate any leaks that break the vacuum in the evaporator.",
        ],
      },
      {
        name: "P6R15: Vacuum breaker valve is too open.",
        solutions: ["P6S15: Close the valve."],
      },
      {
        name: "P6R16: Distillate water pump is not pumping enough water, and the condenser becomes filled with water.",
        solutions: ["P6S16: Check the pump."],
      },
    ],
  },
  {
    name: "P7: Low freshwater production capacity.",
    reasons: [
      {
        name: "P7R1: High evaporation temperature (above 45\u00b0C), therefore low vacuum.",
        solutions: [
          `P7S1: See "High evaporation temperature, therefore low vacuum".`,
        ],
      },
      {
        name: "P7R2: Partially clogged orifice.",
        solutions: ["P7S2: Clean the orifice."],
      },
      {
        name: "P7R3: Mud accumulation on the jacket water side of the heat exchanger.",
        solutions: ["P7S3: Disassemble and clean the plates."],
      },
      {
        name: "P7R4: Limescale formation on the seawater side of the heat exchanger.",
        solutions: ["P7S4: Disassemble and clean the plates."],
      },
      {
        name: "P7R5: Fouling on the seawater side of the condenser plates.",
        solutions: ["P7S5: Disassemble and clean the plates."],
      },
      {
        name: "P7R6: Blockage at the heat exchanger and condenser inlets.",
        solutions: ["P7S6: Disassemble and clean the plates."],
      },
      {
        name: "P7R7: Seawater pump pressure is too low.",
        solutions: [`P7S7: See "Low seawater (ejector) pump pressure/flow".`],
      },
      {
        name: "P7R8: Leaks in the evaporator (low vacuum).",
        solutions: [
          "P7S8: Test the evaporator completely and eliminate any leaks that break the vacuum in the evaporator.",
        ],
      },
      {
        name: "P7R9: Foreign substances in the ejector nozzle.",
        solutions: [
          "P7S9: Clean the ejector completely and replace the nozzle if there is wear or damage.",
        ],
      },
      {
        name: "P7R10: Excessive back pressure at the ejector outlet.",
        solutions: [
          "P7S10: Check the sea outlet circuit and the overboard outlet valve.",
        ],
      },
      {
        name: "P7R11: Non-return valves before the ejector are not working.",
        solutions: [
          "P7S11: Check the valve flaps and perform complete maintenance of the valves.",
        ],
      },
      {
        name: "P7R12: Faulty or clogged flow meter.",
        solutions: ["P7S12: Clean the filter or replace the flow meter."],
      },
      {
        name: "P7R13: Main engine jacket water is too hot.",
        solutions: ["P7S13: Reduce the jacket water temperature slightly."],
      },
      {
        name: "P7R14: Jacket cooling water quantity is low (high-temperature difference between inlet and outlet of jacket cooling water).",
        solutions: [
          "P7S14: Increase the amount of jacket cooling water sent to the heat exchanger by narrowing the bypass valve.",
        ],
      },
      {
        name: "P7R15: Jacket cooling water quantity is high (low-temperature difference between inlet and outlet of jacket cooling water).",
        solutions: [
          "P7S15: Reduce the amount of jacket cooling water sent to the heat exchanger by opening the bypass valve.",
        ],
      },
    ],
  },
];
