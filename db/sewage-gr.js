export default [
  {
    name: "P1 Discharge (sea discharge) pump is not working.",
    reasons: [
      {
        name: "P1R1 Faulty motor.",
        solutions: ["P1S1 Replace the motor."],
      },
      {
        name: "P1R2 No power (electricity).",
        solutions: ["P1S2 Check the electrical system."],
      },
      {
        name: "P1R3 Automatic fuses are off.",
        solutions: [
          "P1S3 Find the reason for the fuses being off before resetting them.",
        ],
      },
      {
        name: "P1R4 Damaged impeller.",
        solutions: [
          "P1S4 Measure the impeller clearance and replace if necessary.",
        ],
      },
      {
        name: "P1R5 Faulty (upper) float switch.",
        solutions: ["P1S5 Check the float switch and electrical circuit."],
      },
    ],
  },
  {
    name: "P2 Discharge pump does not turn off (does not stop).",
    reasons: [
      {
        name: "P2R1 Faulty (lower) float switch.",
        solutions: ["P2S1 Repair or replace."],
      },
      {
        name: "P2R2 The amount of wastewater entering the system is too high.",
        solutions: ["P2S2 It is normal for the pump to stay on."],
      },
    ],
  },
  {
    name: "P3 Discharge pump is running but not pumping water.",
    reasons: [
      {
        name: "P3R1 Wrong rotation direction.",
        solutions: ["P3S1 Change the phases on the electric motor."],
      },
      {
        name: "P3R2 Damaged impeller.",
        solutions: ["P3S2 Replace the impeller."],
      },
      {
        name: "P3R3 Valves on the inlet or outlet side are closed or damaged.",
        solutions: ["P3S3 Check the valves in the circuit."],
      },
    ],
  },
  {
    name: "P4 System is overflowing.",
    reasons: [
      {
        name: "P4R1 Damaged discharge pump.",
        solutions: [
          "P4S1 Open the bypass valve and repair or replace the discharge pump.",
        ],
      },
      {
        name: "P4R2 The amount of wastewater entering the system is too high, the overflow goes to the bilge/tank.",
        solutions: ["P4S2 Normal."],
      },
      {
        name: "P4R3 The filter in the activation compartment is clogged.",
        solutions: ["P4S3 Clean the filter."],
      },
      {
        name: "P4R4 The float switch that activates the pumps is stuck or not working.",
        solutions: ["P4S4 Repair and make the float switch operational."],
      },
    ],
  },
  {
    name: "P5 Air fan (or compressor) is not working.",
    reasons: [
      {
        name: "P5R1 Timing relay is incorrectly set.",
        solutions: ["P5S1 Check and set the timing correctly."],
      },
      {
        name: "P5R2 No power (electricity).",
        solutions: ["P5S2 Check the electrical system."],
      },
      {
        name: "P5R3 Automatic fuses are off.",
        solutions: [
          "P5S3 Find the reason for the fuses being off before resetting them.",
        ],
      },
      {
        name: "P5R4 Faulty motor.",
        solutions: ["P5S4 Repair or replace."],
      },
      {
        name: "P5R5 Damaged impeller (fan).",
        solutions: ["P5S5 Replace the impeller."],
      },
      {
        name: "P5R6 Damaged non-return valve or water in the air fan.",
        solutions: ["P5S6 Repair or replace the valve, drain the water."],
      },
    ],
  },
  {
    name: "P6 Air fan is running, but there is not enough flow.",
    reasons: [
      {
        name: "P6R1 Damaged non-return valve.",
        solutions: ["P6S1 Repair or replace the valve."],
      },
      {
        name: "P6R2 Worn impeller.",
        solutions: ["P6S2 Replace the impeller."],
      },
      {
        name: "P6R3 Wrong rotation direction.",
        solutions: ["P6S3 Change the phases on the electric motor."],
      },
    ],
  },
  {
    name: "P7 Air fan is running, but the pressure is low.",
    reasons: [
      {
        name: "P7R1 Wrong rotation direction.",
        solutions: ["P7S1 Change the phases on the electric motor."],
      },
      {
        name: "P7R2 Worn impeller.",
        solutions: ["P7S2 Replace the impeller."],
      },
    ],
  },
  {
    name: "P8 Air fan is running, but there is no foam or bubbles on the tank surface.",
    reasons: [
      {
        name: "P8R1 Damaged hose or pipe.",
        solutions: ["P8S1 Repair or replace."],
      },
      {
        name: "P8R2 Air distributor clogged or damaged.",
        solutions: ["P8S2 Clean or replace the air distributor."],
      },
    ],
  },
  {
    name: "P9 There is an odor coming from the system.",
    reasons: [
      {
        name: "P9R1 Too much mineral sludge in the aeration tank.",
        solutions: [
          "P9S1 Check the sludge content in the tank and drain if necessary.",
        ],
      },
      {
        name: "P9R2 Bacteria are dead. (Brown sludge indicates normal bacterial life, while black sludge indicates that the bacteria are dead.)",
        solutions: [
          "P9S2 Check the function of the air fan by opening the tank lids, foam or bubbles should be seen on the surface while the fan is running. Empty the tank and wash it with clean water.",
        ],
      },
    ],
  },
  {
    name: "P10 The discharged water is dirty.",
    reasons: [
      {
        name: "P10R1 The amount of wastewater entering the system is too high, which creates too much hydraulic load.",
        solutions: ["P10S1 Nothing can be done."],
      },
      {
        name: "P10R2 The system has just been started, bacteria have not yet formed.",
        solutions: [
          "P10S2 Check the start-up time, it takes about three to four weeks for bacteria to form when the system is first started.",
        ],
      },
      {
        name: "P10R3 Bacteria are dead.",
        solutions: ['P10S3 See "There is an odor coming from the system".'],
      },
    ],
  },
  {
    name: "P11 There is too much dirt on the surface of the settling tank.",
    reasons: [
      {
        name: "P11R1 In large systems, the foam trap may not be working properly or sufficiently.",
        solutions: [
          "P11S1 Check and adjust the water level valve in the foam trap (e.g., about 40 mm below the water level).",
        ],
      },
    ],
  },
  {
    name: "P12 Too much black sludge on the surface of the settling tank.",
    reasons: [
      {
        name: "P12R1 Insufficient operation of the sludge return pump.",
        solutions: [
          "P12S1.1 Check and adjust the sludge return valve.",
          "P12S1.2 Check the air hose connected to the sludge return pipe.",
          "P12S1.3 Drain the sludge in the compartment.",
        ],
      },
    ],
  },
  {
    name: "P13 There is no chlorine in the discharged water.",
    reasons: [
      {
        name: "P13R1 Dosing pump or system is not working.",
        solutions: ["P13S1 Check the functions of the pump or system."],
      },
      {
        name: "P13R2 Disinfectant (chlorine) tank is empty.",
        solutions: ["P13S2 Fill the tank."],
      },
      {
        name: "P13R3 Dosage rate is too low.",
        solutions: ["P13S3 Increase the rate."],
      },
      {
        name: "P13R4 Chlorine has lost its effect.",
        solutions: [
          "P13S4 Empty the chlorine tank and prepare a new solution.",
        ],
      },
    ],
  },
];
