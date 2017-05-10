let AssessmentResult = require( "values/AssessmentResult.js" );

/* eslint-disable no-unused-vars */
/**
 * Represents the defaults of an assessment.
 */
class Assessment {

	/**
	 * Executes the assessment and return its result.
	 *
	 * @param {Paper} paper The paper to run this assessment on.
	 * @param {Researcher} researcher The researcher used for the assessment.
	 * @param {object} i18n The i18n-object used for parsing translations.
	 *
	 * @returns {AssessmentResult} The result of the assessment.
	 */
	getResult( paper, researcher, i18n ) {
		throw "The method getResult is not implemented";
	}

	/**
	 * Is this assessment applicable?
	 *
	 * @param {object} paper The paper to use for the assessment.
	 *
	 * @returns {boolean} True.
	 */
	isApplicable( paper ) {
		return true;
	}

}

/* eslint-enable no-unused-vars */

module.exports = Assessment;
