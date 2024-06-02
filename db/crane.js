export default [
  {
    name: "P1 Control lever cannot control the following movements of the crane:",
    reasons: [
      {
        name: "The idle positions of the control lever and controller are deactivated.",
        solutions: ["The idle position should be readjusted."],
      },
      {
        name: "Spiral steel wire and gear are jammed.",
        solutions: [
          "Cleaning should be done, if there is damage, it should be replaced.",
        ],
      },
      {
        name: "Control lever is stuck.",
        solutions: ["Should be maintained (overhauled)."],
      },
    ],
  },
  {
    name: "P2 Hydraulic motor does not work during operation.",
    reasons: [
      {
        name: "Control lever is stuck.",
        solutions: ["Should be maintained."],
      },
      {
        name: "The locking key or lever is deactivated.",
        solutions: ["Should be maintained."],
      },
    ],
  },
  {
    name: "P3 The electric motor stops when the control lever is activated.",
    reasons: [
      {
        name: "Limit switches are activated.",
        solutions: [
          "The control lever should be pulled in the reverse direction and the bypass button should be pressed (if the slack limit switch of the steel rope is activated, the position of the drums should be checked).",
        ],
      },
      {
        name: "The temperature of the hydraulic oil is less than 5°C.",
        solutions: [
          "The control lever should be put in neutral and the pump should be run idle and wait for the red light to turn off.",
        ],
      },
    ],
  },
  {
    name: "P4 Abnormal sounds are heard when the control lever is moved.",
    reasons: [
      {
        name: "The crane was moved quickly.",
        solutions: ["Operation should be done more smoothly or slower."],
      },
      {
        name: "There is air in the hydraulic system.",
        solutions: ["The air in the system should be removed."],
      },
    ],
  },
  {
    name: "P5 Brake does not release.",
    reasons: [
      {
        name: "There is a problem with the micro switch connection in the control lever.",
        solutions: [
          "Connections should be checked and the micro switch should be readjusted.",
        ],
      },
      {
        name: "There is a problem with electrical equipment (switch, relay, etc.).",
        solutions: ["All should be checked and readjusted if necessary."],
      },
      {
        name: "There is a problem with the brake solenoid valves.",
        solutions: ["Should be checked and maintained."],
      },
      {
        name: "Brake safety valve stuck or spring broken.",
        solutions: ["Should be serviced or the spring should be replaced."],
      },
      {
        name: "Turn brake emergency stop valve closed.",
        solutions: ["It should be checked whether the valve is open."],
      },
    ],
  },
  {
    name: "P6 Brake does not fulfill its duty (does not work).",
    reasons: [
      {
        name: "There is a fault or disconnection in the connection or pins.",
        solutions: ["Should be repaired or replaced."],
      },
      {
        name: "The spring of the brake is broken.",
        solutions: ["Should be replaced."],
      },
    ],
  },
  {
    name: "P7 Boom vibrates during luffing operation.",
    reasons: [
      {
        name: "The steel wire is incorrectly fitted to the drum.",
        solutions: ["The steel wire should be rewound to the drum correctly."],
      },
      {
        name: "The load is lifted at an angle.",
        solutions: ["The load should be lifted upright."],
      },
    ],
  },
  {
    name: "P8 Wire coming out of the reel.",
    reasons: [
      {
        name: "The protection that prevents the steel wire from coming out of place is in the wrong position.",
        solutions: [
          "The gap between the wire guard and the reel should be adjusted.",
        ],
      },
      {
        name: "The load is lifted at an angle.",
        solutions: [
          "The load should always be lifted upright so as not to damage the crane.",
        ],
      },
    ],
  },
  {
    name: "P9 The steel wire is tangled in the drum.",
    reasons: [
      {
        name: "The crane was moved quickly.",
        solutions: ["Operation should be done more slowly."],
      },
      {
        name: "Too long wire or steel wire of inappropriate dimensions has been used.",
        solutions: ["The steel wire should be replaced."],
      },
    ],
  },
  {
    name: "P10 Abnormal noises are coming from mechanical parts.",
    reasons: [
      {
        name: "Moving parts touch each other.",
        solutions: ["Repairs and adjustments should be made."],
      },
      {
        name: "There is loosening in bolts or nuts.",
        solutions: ["Bolts should be tightened to the appropriate torques."],
      },
      {
        name: "Insufficient and poor lubrication.",
        solutions: [
          "The correct oil should be used according to the recommendations in the user manual and the circuits should be checked.",
        ],
      },
      {
        name: "There is damage to bearings and pins.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "There is a problem with the gears.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
    ],
  },
  {
    name: "P11 The life of the steel wire is very short.",
    reasons: [
      {
        name: "Special loading.",
        solutions: [
          "The wire should be replaced when it reaches the wear limits.",
        ],
      },
      {
        name: "The spring force for the steel wire guide is not sufficient.",
        solutions: ["The spring force should be adjusted."],
      },
      {
        name: "Insufficient and poor lubrication.",
        solutions: ["The wires should be greased sufficiently."],
      },
    ],
  },
  {
    name: "P12 Boom or boom does not move.",
    reasons: [
      {
        name: "Overloading or the load being in a very tilted position relative to the crane.",
        solutions: [
          "Loading should be done according to the safe working load (SWL).",
        ],
      },
    ],
  },
  {
    name: "P13 Abnormal noises are coming from the hydraulic pump.",
    reasons: [
      {
        name: "The valves in the circuit from the oil tank to the pump suction circuit are closed.",
        solutions: ["Valves should be kept fully open."],
      },
      {
        name: "Cavitation in the suction circuit.",
        solutions: ["Filter should be cleaned."],
      },
      {
        name: "There is air in the hydraulic system.",
        solutions: ["The system should be vented."],
      },
      {
        name: "There is a problem with the vanes (or pistons) of the hydraulic pump.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "There is a misalignment in the couplings between the hydraulic pump and the electric motor.",
        solutions: [
          "The couplings should be centered (the couplings should be aligned with the axis).",
        ],
      },
      {
        name: "The wear ring is worn out.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
    ],
  },
  {
    name: "P14 The temperature of the hydraulic oil is increasing abnormally.",
    reasons: [
      {
        name: "The fan motor of the oil cooler is not working.",
        solutions: [
          "Electrical connections, cables and thermal relay should be checked.",
        ],
      },
      {
        name: "The cooling capacity of the cooler has decreased due to contamination.",
        solutions: [
          "The cooler should be cleaned with compressed air or steam.",
        ],
      },
      {
        name: "The fan blades of the cooler are broken or deformed.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "Oil passage from the cooler is reduced due to clogging of the cooler or failure of the bypass valve.",
        solutions: [
          "The cooler should be cleaned and the bypass valve should be serviced.",
        ],
      },
      {
        name: "Using the crane under excessive load for a long time.",
        solutions: ["Normal operating limits should be returned."],
      },
    ],
  },
  {
    name: "P15 Oil pressure does not reach the desired normal values.",
    reasons: [
      {
        name: "Ambient temperature above 40°C.",
        solutions: ["The hydraulic pump should be operated at low speed."],
      },
      {
        name: "Hydraulic pump incorrectly assembled.",
        solutions: ["The installation of the pump should be checked."],
      },
      {
        name: "The direction of rotation of the pump is reversed.",
        solutions: [
          "The connections of the electric motor should be corrected.",
        ],
      },
      {
        name: "The adjusting screw of the safety valve is loose, its spring is broken or the valve is clogged with dirt.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
    ],
  },
  {
    name: "P16 Hydraulic motor failure; luffing is done at low loads, but not at heavy loads and the desired speed cannot be reached.",
    reasons: [
      {
        name: "The safety valve is faulty.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "The body and rotor of the hydraulic motor are worn out.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "Pump pressure is insufficient.",
        solutions: ["Renew pump elements or pump."],
      },
    ],
  },
  {
    name: "P17 The hydraulic motor cannot reach high speed at low loads.",
    reasons: [
      {
        name: "Speed change (flow control) valve is stuck.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "Hydraulic pump failure.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
    ],
  },
  {
    name: "P18 The load falls to the ground when the boom is down.",
    reasons: [
      {
        name: "Back pressure regulating valve is stuck.",
        solutions: ["The back pressure valve should be adjusted correctly."],
      },
    ],
  },
  {
    name: "P19 The crane makes a sudden turn during start-up.",
    reasons: [
      {
        name: "The set pressure of the hydraulic motor safety valve is too high.",
        solutions: ["Valve pressure should be readjusted."],
      },
      {
        name: "Back pressure regulating valve is stuck.",
        solutions: ["The back pressure valve should be adjusted correctly."],
      },
    ],
  },
  {
    name: "P20 The crane makes a sudden turn when stopping.",
    reasons: [
      {
        name: "One-way throttle valve of the brake cylinder of the slewing mechanism is faulty.",
        solutions: [
          "Maintenance should be done, if the damage is excessive, it should be renewed.",
        ],
      },
      {
        name: "There is a problem with the control mechanisms of the hydraulic motor.",
        solutions: ["Adjustment should be made."],
      },
    ],
  },
];
