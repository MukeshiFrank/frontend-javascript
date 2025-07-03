// Interfaces with branded properties for nominal typing
export interface MajorCredits {
  credits: number;
  __brand: 'major';
}

export interface MinorCredits {
  credits: number;
  __brand: 'minor';
}

// Function to sum two MajorCredits
export function sumMajorCredits(
  subject1: MajorCredits,
  subject2: MajorCredits
): MajorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'major',
  };
}

// Function to sum two MinorCredits
export function sumMinorCredits(
  subject1: MinorCredits,
  subject2: MinorCredits
): MinorCredits {
  return {
    credits: subject1.credits + subject2.credits,
    __brand: 'minor',
  };
}
