export default [
  {
    name: "RHYTHMIC CHANGE IN ENGINE RPM (HUNTING)",
    solutions: [
      {
        name: "Ensure and adjust the alignment of the connections on the axis.",
      },
      { name: "Balance and adjust the needle valve." },
      { name: "Fill the oil to the top line of the oil level sight glass." },
      { name: "Check the weak spring in the fuel lever connection." },
      {
        name: "Check the fuel circuit, fuel pressure, and filter to ensure sufficient fuel.",
      },
      {
        name: "Check the operation of the voltage regulator and load changes.",
      },
      {
        name: "Check if there is ignition (or combustion) in the engine cylinders.",
      },
      { name: "One or more of the fuel pumps may have a stuck index." },
    ],
  },
  {
    name: "FUEL LEVER DOES NOT OPEN IMMEDIATELY WHEN STARTING THE ENGINE FOR THE FIRST TIME",
    solutions: [
      {
        name: "Check for any strain in the fuel connection between the engine and governor, and adjust if the connection is not free.",
      },
      {
        name: "Make sure the rpm is not too low after the first start, use an additional auxiliary servomotor if necessary.",
      },
      {
        name: "If a servomotor is used, check the operation of the automatic initial movement air valve.",
      },
      { name: "Check that the selected oil quality is correct." },
      { name: "Check the governor oil pressure." },
    ],
  },
  {
    name: "HIGH-FREQUENCY VIBRATION ON THE GOVERNOR OUTPUT SHAFT",
    solutions: [
      { name: "Bleed air from the governor." },
      {
        name: "Check the alignment of the drive mechanisms for gears and eccentrics, and check for excessive backlash.",
      },
      {
        name: "Check that the key, nut, or circlip (instead of set screw) connecting the drive gears to the shaft are not loose.",
      },
      { name: "Check if the governor drive shaft is worn." },
      {
        name: "Move the governor slightly on its mounting feet and make sure the coupling and drive shaft are aligned.",
      },
      { name: "Check the wear and misalignment in gear couplings." },
    ],
  },
  {
    name: "LOAD IS NOT DISTRIBUTED EVENLY TO MACHINES RUNNING IN PARALLEL",
    solutions: [
      { name: "Readjust the governor speed droop." },
      {
        name: "Readjust the governor speed setting for machines operating together at the same load, correct speed (rpm), and appropriate frequency.",
      },
    ],
  },
  {
    name: "ENGINE RESPONSE IS DELAYED",
    solutions: [
      {
        name: "Adjust the balancing needle valve. To do this, open the valve more while the engine is running unloaded, if possible without causing imbalance. Make sure the balancing indicator is not too far from the maximum position.",
      },
      { name: "The engine may be overloaded, reduce the engine load." },
      { name: "The amount of fuel may be low, clean the fuel filters." },
      {
        name: "Check for any strain in the fuel connection between the engine and governor.",
      },
      { name: "Check the governor oil." },
      {
        name: "One or more of the engine fuel pump indexes may be stuck or strained.",
      },
    ],
  },
  {
    name: "ENGINE CANNOT CARRY THE FULL LOAD",
    solutions: [
      {
        name: "Readjust the load setting from the load limit button on the governor and increase the load limit setting.",
      },
      {
        name: "Verify that the load limiter on the governor is not at 10, correct the fuel connection between the engine and governor, and the stop settings of the load limiter and fuel pumps.",
      },
      {
        name: "Clean the fuel filters if they are dirty, and fix the problem if the fuel pressure or fuel temperature is low.",
      },
      { name: "Check and adjust the voltage regulator output if necessary." },
      {
        name: "Check if there is ignition (or combustion) in the engine cylinders.",
      },
    ],
  },
  {
    name: "ENGINE OVERSPEEDS",
    solutions: [
      {
        name: "The engine may have been stopped at a higher than normal speed, the speed should be reduced by 2-3 turns from the synchronization control button and the engine should be operated in this way.",
      },
      {
        name: "If the overspeed setting is low, it should be adjusted again, usually 10% more than the normal operating speed is recommended.",
      },
      {
        name: "The fuel pump index levers (or at least one) may be stuck, these levers should be exercised manually.",
      },
      {
        name: "The fuel filter may be dirty or fuel may not be coming to the circuit for any reason.",
      },
      { name: "The overspeed trip lever may be worn." },
    ],
  },
  {
    name: "ENGINE CANNOT REACH NORMAL OPERATING SPEED",
    solutions: [
      {
        name: "The synchronization control may have reached the highest position, in this case, the synchronization control can be retracted and centered by means of the button and one or two teeth can be slipped from the terminal shaft.",
      },
      { name: "The synchronization motor may be faulty." },
      {
        name: "The synchronization motor is running, but it may not be able to control because the mouth (square) of the motor shaft is damaged.",
      },
      {
        name: "The female gear that transmits the movement from the engine or the male gear of the governor opposite it may have slipped.",
      },
    ],
  },
  {
    name: "OTHER SUGGESTIONS",
    solutions: [
      {
        name: "If the governor oil is constantly decreasing and the leak is not visible from the outside, the oil seal on the drive shaft at the bottom of the governor may be worn and may need to be replaced.",
      },
      {
        name: "If the diesel generator is running unloaded, the load indicator on the governor should be around 2. If this value is very different, the fuel pump indexes may be closed or opened too much from time to time due to negative conditions in the exhaust temperature or combustion pressures. Many problems will be prevented when the stop settings of the fuel pumps are made correctly through the indexes.",
      },
      {
        name: "If the governor (or fuel lever) is loaded despite the low load on the diesel generator, the fuel pump indexes are too close, in such a case, it is necessary to give way to the indexes equally.",
      },
      {
        name: "If the governor (fuel lever) is loaded too little despite the high load on the diesel generator, it means that the fuel pump indexes are too open, and the indexes should be tightened equally.",
      },
    ],
  },
];
