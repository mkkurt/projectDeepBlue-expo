const problems = [
  {
    name: "Vibrations in Separator.",
    reasons: [
      {
        name: "Vibration is normal until reaching the operating speed (reasonably).",
        solution: "Do nothing.",
      },
      {
        name: "Imbalance in the bowl (balancing) due to poor cleaning, incorrect assembly, improper tightening of the large ring nut, or pressure applied to the stones in the bowl is wrong (bowl parts taken from another separator).",
        solution:
          "Stop the separator immediately, find the cause, and clean the separator; poorly tightened large ring nut can lead to serious dangers.",
      },
      {
        name: "Rubber pads of the vibration cushion have lost flexibility.",
        solution: "Replace the rubber pads.",
      },
      {
        name: "Upper bearing springs of the main shaft are broken.",
        solution: "Replace all springs.",
      },
      { name: "Bedplate is too weak.", solution: "Reinforce the bedplate." },
      {
        name: "Irregular (variable) sludge accumulation in the sludge area.",
        solution: "Clean the bowl.",
      },
      {
        name: "Incorrect height adjustment of the fuel disk.",
        solution: "Re-adjust the height of the fuel disk by checking.",
      },
      {
        name: "Incorrect height adjustment of the operation water control disk.",
        solution:
          "Re-adjust the operation water control disk (according to the maintenance manual instructions).",
      },
      {
        name: "Shaft is bent.",
        solution: "Replace the main shaft (vertical shaft).",
      },
      {
        name: "Wear, heating, damage, or erosion in the bearings.",
        solution: "Replace the bearings with new ones.",
      },
    ],
  },
  {
    name: "Odor.",
    reasons: [
      {
        name: "Burnt smell during initial startup and stopping due to slipping of friction blocks (brakes) is normal.",
        solution: "Do nothing.",
      },
      {
        name: "V-belts or flat belts are slipping.",
        solution: "Clean the belts and adjust the tension.",
      },
      {
        name: "Bearing is getting hot.",
        solution:
          "Listen and observe the separator, identify the correct location, and replace the bearings.",
      },
      {
        name: "Engine has overheated.",
        solution:
          "Investigate the cause and adjust the overload relay if necessary.",
      },
      { name: "Brake is stuck.", solution: "Release the brake (disengage)." },
      {
        name: "Oil level in the gear housing is too low.",
        solution: "Check the oil level and add oil if necessary.",
      },
    ],
  },
  {
    name: "Unusual noise or noise.",
    reasons: [
      {
        name: "Oil level in the gear housing is too low.",
        solution: "Check the oil level and add oil if necessary.",
      },
      {
        name: "Horizontal or vertical gears are worn.",
        solution: "Replace all gears.",
      },
      {
        name: "Worn, worn, or damaged bearings.",
        solution: "Replace all bearings.",
      },
      {
        name: "Noise due to friction blocks (brakes) during startup and stopping is normal.",
        solution: "Do nothing.",
      },
      {
        name: "Incorrect or damaged coupling rubber between coupling discs.",
        solution: "Adjust the gap or replace the coupling rubber.",
      },
      {
        name: "Incorrect height adjustment of the fuel disk.",
        solution: "Re-adjust the height of the fuel disk by checking.",
      },
      {
        name: "Incorrect height adjustment of the operation water control disk.",
        solution: "Re-adjust the operation water control disk by checking.",
      },
    ],
  },
  {
    name: "Speed is too low.",
    reasons: [
      { name: "Brake is stuck.", solution: "Release the brake (disengage)." },
      {
        name: "Revolving speed of clutch discs is oily or worn.",
        solution: "Clean or replace all clutch discs.",
      },
      {
        name: "Engine malfunction.",
        solution: "Repair or replace the engine.",
      },
      {
        name: "Worn, worn, or damaged bearings.",
        solution: "Replace all bearings.",
      },
      {
        name: "Some damaged parts (such as gears).",
        solution:
          "Immediately stop the separator and check if the main shaft can be rotated manually.",
      },
      {
        name: "Bowl is not closing or there is a leak in the bowl.",
        solution: "Remove the bowl and inspect.",
      },
      {
        name: "Incorrect transmission in the gear system (for example, using gears meant for a 60 Hz system in a 50 Hz system).",
        solution: "Use gear hardware suitable for the power supply frequency.",
      },
    ],
  },
  {
    name: "Speed is too high.",
    reasons: [
      {
        name: "Tachometer is showing incorrectly.",
        solution: "Check from the revolution counter on the crankcase.",
      },
      {
        name: "Incorrect connection in the power transmission.",
        solution:
          "Immediately stop the separator, check the connection, and inspect the belt and pulley.",
      },
      {
        name: "Engine speed is not appropriate.",
        solution:
          "Stop the separator immediately and replace the engine with one of the correct speed.",
      },
      {
        name: "Incorrect transmission in the gear system (for example, using gears meant for a 50 Hz system in a 60 Hz system).",
        solution: "Use gear hardware suitable for the power supply frequency.",
      },
      {
        name: "Incorrect frequency (50/60 Hz).",
        solution: "Check the frequency.",
      },
    ],
  },
  {
    name: "Power consumption for initial startup is very low.",
    reasons: [
      { name: "Ammeter is faulty.", solution: "Replace it." },
      {
        name: "Revolving speed of clutch discs is oily or worn.",
        solution: "Clean or replace all clutch discs.",
      },
      {
        name: "Incorrect transmission in the gear system (for example, using gears meant for a 50 Hz system in a 60 Hz system).",
        solution: "Use gear hardware suitable for the power supply frequency.",
      },
      {
        name: "Incorrect clutch discs (for example, using discs meant for a 50 Hz system in a 60 Hz system).",
        solution: "Use clutch discs suitable for the power supply frequency.",
      },
      {
        name: "Damaged electric motor.",
        solution: "Repair or replace the motor.",
      },
    ],
  },
  {
    name: "Power consumption for initial startup is very high.",
    reasons: [
      { name: "Ammeter is faulty.", solution: "Replace it." },
      {
        name: "Engine malfunction.",
        solution: "Repair or replace the engine.",
      },
      { name: "Bearing malfunction.", solution: "Replace all bearings." },
      {
        name: "Worn horizontal or vertical gears.",
        solution: "Replace all gears.",
      },
      {
        name: "Incorrect transmission in the gear system (for example, using gears meant for a 60 Hz system in a 50 Hz system).",
        solution: "Use gear hardware suitable for the power supply frequency.",
      },
      {
        name: "Incorrect clutch discs (for example, using discs meant for a 60 Hz system in a 50 Hz system).",
        solution: "Use clutch discs suitable for the power supply frequency.",
      },
      {
        name: "Brake is stuck.",
        solution: "Release the brake (disengage).",
      },
      {
        name: "Incorrect height adjustment of the operation water control disk.",
        solution: "Re-adjust the operation water control disk by checking.",
      },
      {
        name: "Incorrect rotation direction.",
        solution:
          "Ensure the correct rotation direction by changing motor connections.",
      },
    ],
  },
  {
    name: "Separator takes too long to reach speed.",
    reasons: [
      {
        name: "Brake is stuck.",
        solution: "Release the brake (disengage).",
      },
      {
        name: "Revolution clutches in the clutch are oily or worn.",
        solution: "Clean or replace all clutches.",
      },
      {
        name: "Engine malfunction.",
        solution: "Repair or replace the engine.",
      },
      {
        name: "Damage to the bearings.",
        solution: "Replace all bearings.",
      },
      {
        name: "Incorrect height adjustment of the operation water control disk or fuel disk.",
        solution: "Re-adjust by checking the setting.",
      },
    ],
  },
  {
    name: "Water in the gear housing (crankcase).",
    reasons: [
      {
        name: "Condensation.",
        solution:
          "Drain the water, clean the gear housing, and change the oil.",
      },
      {
        name: "Problem or blockage in the bowl body drain.",
        solution: "Clean the gear housing and change the oil.",
      },
      {
        name: "Leakage due to the upper bearing.",
        solution:
          "Replace the sealing element, clean the gear housing, and change the oil.",
      },
    ],
  },
  {
    name: "Separator stopping time is too long.",
    reasons: [
      {
        name: "Brake pad is oily or worn (friction on the belt-pulley system causes friction on the belt).",
        solution: "Clean or replace (adjust belt tension or replace the belt).",
      },
    ],
  },
  {
    name: "Separated liquid escapes from the bowl body drain or mud outlets.",
    reasons: [
      {
        name: "Mud is being discharged (sock is applied).",
        solution: "Normal.",
      },
      {
        name: "Filter in the operation water line is clogged, or the pressure is too low.",
        solution:
          "Clean the filter, maintain a pressure between 2-6 bar for opening water, and 1.4-2.4 bar for closing water.",
      },
      {
        name: "Holes (channels) in the operation water control disk are clogged.",
        solution: "Clean the operation water disk.",
      },
      {
        name: "Gasket on the operation water disk is damaged.",
        solution: "Replace the gasket.",
      },
      {
        name: "Mud accumulation in the operation flange.",
        solution: "Clean it.",
      },
      {
        name: "O-ring under the gravity disk is damaged.",
        solution: "Replace the O-ring.",
      },
      {
        name: "Small nut squeezing the gravity disk is damaged.",
        solution: "Replace it.",
      },
      {
        name: "Seal element under the bowl head is damaged, or the surface pressed by this element on the moving bowl is damaged or dirty.",
        solution:
          "Replace the seal element, clean and polish the surface on the moving bowl, or replace the moving bowl.",
      },
      {
        name: "Seal element (O-ring) on the moving bowl is damaged.",
        solution: "Replace the O-ring.",
      },
      {
        name: "Valve (Teflon) plugs are damaged.",
        solution: "Replace all plugs.",
      },
      {
        name: "Displacement (or seal) water volume is too large.",
        solution: "Check the water and filling time.",
      },
      { name: "Speed is too low.", solution: "See 'P4 Speed is too low.'" },
    ],
  },
  {
    name: "Accidental bowl weeping during operation.",
    reasons: [
      {
        name: "Filter in the operation water line is clogged.",
        solution: "Clean the filter.",
      },
      {
        name: "No water in the operation water system.",
        solution: "Check the system and valves.",
      },
      {
        name: "Incorrect connections of operation water to the separator.",
        solution: "Correct the connections.",
      },
      {
        name: "Nozzle in the operation flange is clogged.",
        solution: "Open the nozzle hole.",
      },
      {
        name: "Mud accumulation in the operation flange.",
        solution: "Clean it.",
      },
      {
        name: "Square-shaped seal on the moving bowl is damaged.",
        solution: "Replace it.",
      },
      {
        name: "Valve (Teflon) plugs are damaged.",
        solution: "Replace all plugs.",
      },
      {
        name: "Leakage in the valve used for opening water.",
        solution: "Repair the valve.",
      },
    ],
  },
  {
    name: "Bowl does not weep during mud discharge (sock).",
    reasons: [
      {
        name: "Filter in the operation water line is clogged.",
        solution: "Clean the filter.",
      },
      {
        name: "Water pressure is too low.",
        solution: "Check the opening water pressure.",
      },
      {
        name: "Water flow is too low.",
        solution: "Check the opening water flow.",
      },
      {
        name: "Seals on the operation water disk are damaged.",
        solution: "Replace them.",
      },
      {
        name: "Seal element (and Teflon plugs) in the operation flange is damaged.",
        solution: "Replace them.",
      },
    ],
  },
  {
    name: "Insufficient or undesired sludge discharge (disposal).",
    reasons: [
      {
        name: "Water pressure is too low.",
        solution: "Check and adjust the water pressure.",
      },
      {
        name: "Insufficient water flow.",
        solution: "Check and adjust the opening water flow.",
      },
      {
        name: "Teflon valve plugs in the operation flanges are too high.",
        solution: "Replace with the correct ones.",
      },
      {
        name: "Sludge accumulation in the operation system.",
        solution: "Clean the operation system.",
      },
    ],
  },
  {
    name: "Liquid-Liquid Separation Problems",
    reasons: [
      { name: "Insufficient or poor separation.", solution: "" },
      {
        name: "Gravity disk inner (hole) gap is too small.",
        solution: "Use a larger diameter disk.",
      },
      {
        name: "Incorrect separation temperature.",
        solution:
          "Adjust the temperature according to the liquid to be separated.",
      },
      {
        name: "Capacity (flow) is too high.",
        solution: "Adjust the flow rate.",
      },
      {
        name: "Dirty stones.",
        solution: "Increase the frequency of discharging and clean the stones.",
      },
      { name: "Speed is too low.", solution: "See 'P4 Speed is too low.'" },
    ],
  },
  {
    name: "Lubrication oil or fuel at the water outlet, known as 'separator is leaking' on the ship.",
    reasons: [
      {
        name: "Seal water kink or near kink;",
        solution:
          "If at least 25% of the fuel to be separated is water, there is no need to provide seal water.",
      },
      {
        name: "Clean fuel or lubrication oil outlet valve is closed.",
        solution: "Open the valve.",
      },
      {
        name: "Gravity disk (inner diameter) is too large.",
        solution: "Replace it with a smaller (and appropriate) one.",
      },
      {
        name: "Capacity (flow) is too high.",
        solution:
          "Reduce the capacity (flow) by reducing the fuel or lubrication oil supply.",
      },
      {
        name: "O-ring under the gravity disk is damaged or displaced.",
        solution: "Check and replace.",
      },
      {
        name: "Small ring nut squeezing the gravity disk is damaged.",
        solution: "Check and replace.",
      },
      {
        name: "O-ring on the heavy phase (water) disk (pump) is damaged.",
        solution: "Check and replace.",
      },
      {
        name: "Dirty stones.",
        solution: "Clean the stones and increase the frequency of discharging.",
      },
      {
        name: "Density variation due to changing separation temperature.",
        solution: "Keep the temperature constant and at the correct value.",
      },
      {
        name: "High backpressure (for the bowl containing the centrifugal pump).",
        solution:
          "Reduce the backpressure (light phase, i.e., fuel in the second step).",
      },
      {
        name: "Seal water volume is too small.",
        solution: "Check the seal water and its circuit.",
      },
      {
        name: "Seal element under the bowl head is damaged or the surface pressed by this element on the movable bowl is damaged or dirty.",
        solution:
          "Replace the seal element, clean and polish the surface pressed by the movable bowl, or replace the movable bowl.",
      },
      {
        name: "Seal element (O-ring) on the movable bowl is damaged.",
        solution: "Renew the O-ring.",
      },
      {
        name: "Bowl and related elements are incorrectly assembled.",
        solution: "Disassemble the bowl and reassemble it correctly.",
      },
      { name: "Speed is too low.", solution: "See 'P4 Speed is too low.'" },
    ],
  },
  {
    name: "Fuel or lubrication oil contains a heavy phase (water), known as 'water is mixing with fuel or lubrication oil' on the ship.",
    reasons: [
      {
        name: "Gravity disk is too small.",
        solution: "Replace it with a larger (and appropriate) one.",
      },
      {
        name: "Closed valve at the heavy phase (water) outlet.",
        solution: "Open the valve.",
      },
      {
        name: "Capacity (flow) is too high.",
        solution:
          "Reduce the capacity (flow) by reducing the fuel or lubrication oil supply.",
      },
      {
        name: "Both sides of the mud discharge are full.",
        solution:
          "Empty the bowl more frequently (increase the frequency of discharging).",
      },
    ],
  },
  {
    name: "Bowl is filling up and getting clogged with sludge.",
    reasons: [
      {
        name: "Washing (seal) water is insufficient or improperly applied.",
        solution: "Apply correctly.",
      },
      {
        name: "Sludge viscosity is excessively high.",
        solution:
          "Empty the bowl more frequently (increase the frequency of discharging).",
      },
      {
        name: "Bowl is filled with sludge.",
        solution:
          "Clean the bowl and shorten the discharge intervals, wash the sludge cover with pressure when discharging.",
      },
      {
        name: "Sludge tank is full.",
        solution:
          "Empty the sludge tank and clean the bowl inside the separator housing.",
      },
      {
        name: "Damaged filter.",
        solution:
          "Check if solid particles are stuck between the stones (disks).",
      },
    ],
  },
  {
    name: "Lubrication oil or fuel in the sludge.",
    reasons: [
      {
        name: "Lubrication oil or fuel valve was not closed during discharging.",
        solution: "Close the lubrication oil or fuel valve before discharging.",
      },
      {
        name: "Leakage between the bowl head (upper bowl) and the movable lower bowl.",
        solution: "Check and replace the sealing element in between.",
      },
      {
        name: "Bowl is not fully closed.",
        solution:
          "Check the operation (closing) water and the automation system.",
      },
    ],
  },
  {
    name: "Liquid-Solid Separation Problems",
    reasons: [
      { name: "Weak and inefficient solid separation.", solution: "" },
      {
        name: "Incorrect separation temperature.",
        solution: "Adjust the temperature correctly.",
      },
      {
        name: "Local sludge is completely full.",
        solution:
          "Empty the bowl more frequently (increase the frequency of discharging).",
      },
      {
        name: "Capacity (flow) is too high.",
        solution: "Reduce the capacity (flow) by reducing the feed.",
      },
      { name: "Dirty stones.", solution: "Clean all stones." },
      { name: "Speed is too low.", solution: "See 'P4 Speed is too low'." },
      {
        name: "Water in the fuel or lubrication oil supplied to the separator.",
        solution:
          "Shorten the sludge discharge interval (increase the frequency of discharging) or operate the separator using the liquid-liquid separation method.",
      },
    ],
  },
  {
    name: "Lubrication oil or fuel at the water outlet.",
    reasons: [
      {
        name: "Clean fuel or lubrication oil outlet valve is closed.",
        solution: "Open the valve.",
      },
      {
        name: "Sludge viscosity is excessively high.",
        solution:
          "Empty the bowl more frequently (increase the frequency of discharging).",
      },
      { name: "Dirty stones.", solution: "Clean all stones." },
      {
        name: "O-ring on the heavy phase (water) disk (pump) is damaged.",
        solution: "Check and replace.",
      },
      {
        name: "Leakage between the bowl head (upper bowl) and the movable lower bowl.",
        solution: "Check and replace the sealing element in between.",
      },
      {
        name: "Bowl is not fully closed.",
        solution:
          "Check the operation (closing) water and the automation system.",
      },
      {
        name: "Leakage between the bowl head (upper bowl) and the movable lower bowl.",
        solution: "Check and replace the sealing element in between.",
      },
    ],
  },
];

export default problems;
